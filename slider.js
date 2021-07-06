/**
 * @module Slider
 * @param {HTMLElement} el 
 * 
 */

 function Slider(el){
	const isTouch = 'ontouchstart' in document.documentElement;
	const slider = el.querySelector('.slider-wrapper');
	const items = el.querySelectorAll('.slider-wrapper > li');
	const total = items.length;	
	let itemW, gap, nb;
	let startX = 0, moveX = 0;
	let posNum = 0, dir;
	let posX = 0, oldposX;
	let isMove = false;
	
	slider.style.setProperty('--total', total);
	
	const observer = new IntersectionObserver(entries => {
		entries.forEach(e => {
			e.target.setAttribute('data-hidden', e.isIntersecting ? false : true);
		});
	});
	items.forEach((item,i) => observer.observe(item));
	
	const goto = (value, transition = true) => {
		posX = -value * (itemW + gap);
		if(transition) slider.classList.add('goto');
		slider.style.transform = `translate3d(${posX}px,0,0)`;
	}
	const resize = () => {
		gap = parseInt(getComputedStyle(slider).gridColumnGap);
		nb = parseInt(getComputedStyle(slider).getPropertyValue('--nb')) || 1;
		itemW = items[0].getBoundingClientRect().width;
		goto(posNum, false);
	}
	const mouseDown = value => {
		moveX = value;
		startX = value - posX;
		slider.classList.remove('goto');
		window.addEventListener('mouseup', clickout);
	}
	const mouseMove = value => {
		posX = value - startX;
		if(Math.abs(moveX - value) > 5 && !isMove){
			slider.classList.add('onswipe');
			isMove = true;
			if(isTouch) document.body.classList.add('disableScroll');
		}
		slider.style.transform = `translate3d(${posX}px,0,0)`;
		if(dir > value) posNum = -(posX - (itemW - 20)) / (itemW + gap);
		else if(dir < value) posNum = -(posX - 20 - gap) / (itemW + gap);
		dir = value;
		oldposX = posX;
	}
	const mouseUp = () => {
		slider.onmousemove = null;
		slider.onmouseup = null;
		posNum = Math.floor(posNum);
		if(posNum < 0) posNum = 0;
		if(posNum > total - nb) posNum = total - nb;
		goto(posNum);
		window.removeEventListener('mouseup', clickout);
		slider.classList.remove('onswipe');
		isMove = false;
		document.body.classList.remove('disableScroll');
	}
	const leave = (e) => {
		if(e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) mouseUp();
	}
	const clickout = e => !slider.contains(e.target) && mouseUp();
	
	this.prev = () => {
		posNum > 0 && posNum--;
		goto(posNum);
	}
	this.next = () => {
		posNum < total - nb && posNum++;
		goto(posNum);
	}
	this.create = () => {
		if(isTouch){
			slider.ontouchstart = e => {
				mouseDown(e.touches[0].clientX);
				slider.ontouchmove = e => mouseMove(e.touches[0].clientX);
				slider.ontouchend = e => mouseUp(e.changedTouches[0].clientX);
			}
		}
		else{
			slider.onmousedown = e => {
				mouseDown(e.clientX);
				slider.onmousemove = e => mouseMove(e.clientX);
				slider.onmouseup = e => mouseUp(e.clientX);
				return false;
			}
			document.querySelector('html').addEventListener('mouseleave', leave);
		}
		window.addEventListener('resize', resize, {passive: true});
	}
	this.destroy = () => {
		slider.onmousemove = null;
		slider.onmouseup = null;
		slider.ontouchstart = null;
		slider.onmousedown = null;
		slider.style.transition = 'none';
		slider.style.transform = 'none';
		window.removeEventListener('resize', resize);
		document.querySelector('html').removeEventListener('mouseleave', leave);
	}
		
	resize();
}

export default Slider;