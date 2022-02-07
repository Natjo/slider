/**
 * @module Slider
 * @param {HTMLElement} el 
 * 
 */

 function Slider(slider) {
	const isTouchable = 'ontouchstart' in document.documentElement;
	const items = slider.querySelectorAll('.item');
	const content =  slider.querySelector('.slider-content');
    const btn_prev = slider.querySelector('.slider-btn.prev');
    const btn_next = slider.querySelector('.slider-btn.next');
	const pagination = document.createElement('div');
	pagination.className = 'slider-pagination';
	slider.appendChild(pagination);
	const bullets = [];
	const total = items.length;
    let itemW, gap, nb;
    let startX = 0;
    let moveX = 0;
    let posNum = 0;
    let posX = 0, oldposX;
    let isMove = false;
	let contentW;
	let oldNum;
	var startValue = 0;
	let dir;
	
	items.forEach((item,i) => {
		const bullet = document.createElement('button');
		bullet.setAttribute('aria-hidden', true);
		bullet.setAttribute('tabindex', -1);
		pagination.appendChild(bullet);
		bullets.push(bullet);
		bullet.onclick = () => {
			posNum = i * nb;
			if (posNum > total - nb) posNum = total - nb;
			goto(posNum)
		}
	});
	
    const options = {
        root: slider,
        rootMargin: '0px',
        threshold: 1,
    };
	
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            const link = e.target.querySelector('a');

            if (e.isIntersecting) {
                if (link) {
                    link.setAttribute('aria-hidden', false);
                    link.setAttribute('tabindex', 0);
                }
                e.target.classList.remove('hidden');
            } else {
                if (link) {
                    link.setAttribute('aria-hidden', true);
                    link.setAttribute('tabindex', -1);
                }
                e.target.classList.add('hidden');
            }
        });
    }, options);
	
    const goto = (value, transition = true) => {
        bullets.forEach(btn => {
			btn.classList[bullets[Math.ceil(value / nb)] === btn ? 'add' : 'remove']('active')
		});
        posX = -value * (itemW + gap);
        if (transition) content.style.transition = 'transform .4s ease';
        content.style.transform = `translate3d(${posX}px,0,0)`;
		
		if(posNum == 0){
			btn_prev.setAttribute('tabindex', -1);
			btn_prev.setAttribute('aria-disabled', true);
		} else{
			btn_prev.setAttribute('tabindex', 0);
			btn_prev.setAttribute('aria-disabled', false);
		}
		if (posNum >= total - nb){
			btn_next.setAttribute('tabindex', -1);
			btn_next.setAttribute('aria-disabled', true);
		}else{
			btn_next.setAttribute('tabindex', 0);
			btn_next.setAttribute('aria-disabled', false);
		}
    };

    const clickout = e => !content.contains(e.target) && mouseUp();

    const mouseDown = value => {
		startValue = value;
        startX = value - posX;
        content.style.transition = 'none';
        window.addEventListener('mouseup', clickout);
    };

    const resize = () => {
        gap = parseInt(getComputedStyle(content).gridColumnGap);
        nb = parseInt(getComputedStyle(slider).getPropertyValue('--nb')) || 1;
		contentW = content.getBoundingClientRect().width;
        itemW = items[0].getBoundingClientRect().width;
		content.style.transition = 'none';
        goto(posNum, false);
		bullets.forEach((btn, i) => btn.style.display = i >= Math.ceil(total / nb) ? 'none' : 'block');
    };

    const mouseMove = value => {
        posX = value - startX - moveX;
        if (posX != oldposX && !isMove) {
            content.classList.add('onswipe');
            isMove = true;
        }
        content.style.transform = `translate3d(${posX}px,0,0)`;
		dir = startValue - value;
        oldposX = posX;
    };

    const mouseUp = () => {
        document.onmousemove = null;
        document.onmouseup = null;
		
		if(dir >= 40) posNum = posNum + nb;
		if(dir <- 40) posNum = posNum - nb;
		
		//posNum = Math.ceil(-(posX - (itemW/2+ gap)) / (itemW+gap))-1; no group
		//posNum = Math.ceil((-(posX - contentW / 2) / (contentW)) - 1) * nb;
	
		if (posNum > total - nb) posNum = total - nb;
		if (posNum < 0) posNum = 0;
        goto(posNum);
        window.removeEventListener('mouseup', clickout);
        content.classList.remove('onswipe');
        isMove = false;
    };
	
	const focus = val => {
		content.addEventListener('transitionend', () => {
			oldNum === val && items[val].querySelector('a').focus()
		}, {once: true});
		oldNum = val;				
	};
	
    const prev = () => {
        if (posNum > 0) {
			let offset = nb + Math.ceil(posNum / nb) * nb - total;
			if (offset <= 0) offset = 0;
			posNum = posNum - nb + offset;
			if (posNum < 0) posNum = 0;
            goto(posNum);
			focus(posNum + nb - 1);
        }
    };

    const next = () => {
        if (posNum < total - nb) {
			posNum = posNum + nb;
			if (posNum > total - nb) posNum = total - nb;
            goto(posNum);
			focus(posNum);
        }
    };

    this.create = () => {
        if (total <= nb) return;
		resize();
        slider.style.setProperty('--total', total);
        if (isTouchable) {
            slider.ontouchstart = e => {
                mouseDown(e.touches[0].clientX);
                document.ontouchmove = e => mouseMove(e.touches[0].clientX);
                document.ontouchend = e => mouseUp(e.changedTouches[0].clientX);
            };
        } else {
            content.onmousedown = e => {
                mouseDown(e.clientX);
                document.onmousemove = e => mouseMove(e.clientX);
                document.onmouseup = e => mouseUp(e.clientX);
                return false;
            };
            window.addEventListener('resize', resize, {passive: true});
        }
		items.forEach((item,i) => {
			observer.observe(item)
			item.setAttribute('aria-roledescription','slide');
			item.setAttribute('role','group');
			item.setAttribute('aria-label', `${i + 1}/${total}`);
		});
		slider.setAttribute('aria-roledescription', 'carousel');
		content.setAttribute('aria-live', 'polite');
		if (btn_prev) btn_prev.onclick = () => prev();
		if (btn_next) btn_next.onclick = () => next();
    };
	
    this.destroy = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        document.ontouchstart = null;
		window.removeEventListener('resize', resize);
		slider.removeAttribute('style');
		slider.removeAttribute('aria-roledescription');
        content.onmousedown = null;
        content.removeAttribute('style');
		content.removeAttribute('aria-live');
		items.forEach(item => {
			observer.unobserve(item);
			item.removeAttribute('aria-roledescription');
			item.removeAttribute('role');
			item.removeAttribute('aria-label');
		});
    };

    window.addEventListener('load', resize);
}


export default Slider;