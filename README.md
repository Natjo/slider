
# Carousel

![version](https://img.shields.io/github/manifest-json/v/Natjo/slider)

Simple grid slider/carousel with no infinite loop

## Parameters
| Parameter | Type | Description |
| ------ | ------ | ------ |
| el | HTMLElement | Element that contain |


## Usage
[slider-full](#slider-full)
[slider](#slider)
[carousel](#carousel)
[carousel-full](#carousel-full)
[carousel-full](#carousel-full)

### Slider full

#### html
```html
<div class="slider slider-full">
    <ul class="slider-wrapper">
        <li class="item1">
            <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
        </li>
        <li class="item1">
            <img loading="lazy" src="https://picsum.photos/id/845/536/354" alt="">
        </li>
        <li class="item1">
            <img loading="lazy" src="https://picsum.photos/id/885/536/354" alt="">
        </li>
        <li class="item1">
            <img loading="lazy" src="https://picsum.photos/id/825/536/354" alt="">
        </li>
        <li class="item1">
            <img loading="lazy" src="https://picsum.photos/id/145/536/354" alt="">
        </li>
    </ul>
</div>
```
#### javascript
```javascript
const slider_full = document.querySelector('.slider-full');
const slider_full_slider = new Slider(slider_full);
slider_full_slider.create();
```



### Slider
#### html
```html
<div class="slider mySlider">
    <ul class="slider-wrapper">
        <li class="item1">
            <a href="https://google.fr" target="_blank">
                <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
                <h3>Lorem</h3>
            </a>
        </li>
        <li class="item1">
            <a href="https://google.fr" target="_blank">
                <img loading="lazy" src="https://picsum.photos/id/845/536/354" alt="">
                <h3>Lorem</h3>
            </a>
        </li>
        <li class="item1">
            <a href="https://google.fr" target="_blank">
                <img loading="lazy" src="https://picsum.photos/id/885/536/354" alt="">
                <h3>Lorem</h3>
            </a>
        </li>
        <li class="item1">
            <a href="https://google.fr" target="_blank">
                <img loading="lazy" src="https://picsum.photos/id/825/536/354" alt="">
                <h3>Lorem</h3>
            </a>
        </li>
        <li class="item1">
            <a href="https://google.fr" target="_blank">
                <img loading="lazy" src="https://picsum.photos/id/145/536/354" alt="">
                <h3>Lorem ipsum</h3>
            </a>
        </li>
    </ul>
</div>
```
#### javascript
```javascript
const slider = document.querySelector('.mySlider');
const slider_slider = new Slider(slider);
slider_slider.create();
```


### Carousel

#### html
```html
<div class="slider carousel">
    <ul class="slider-wrapper">
        <li class="item">
            <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
            <h3>Lorem</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis
                optio. Corrupti.
            </p>
            <a href="https://google.fr" target="_blank">see</a>
        </li>
        <li class="item">
            <img loading="lazy" src="https://picsum.photos/id/845/536/354" alt="">
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="https://google.fr" target="_blank">see</a>
        </li>
        <li class="item">
            <img loading="lazy" src="https://picsum.photos/id/885/536/354" alt="">
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="https://google.fr" target="_blank">see</a>
        </li>
        <li class="item">
            <img loading="lazy" src="https://picsum.photos/id/825/536/354" alt="">
            <h3>Lorem</h3>
            <a href="https://google.fr" target="_blank">see</a>
        </li>
        <li class="item">
            <img loading="lazy" src="https://picsum.photos/id/145/536/354" alt="">
            <h3>Lorem ipsum</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat, blanditiis?
            </p>
            <a href="https://google.fr" target="_blank">see</a>
        </li>
    </ul>
</div>
```
#### javascript
```javascript
const carousel = document.querySelector('.carousel');
const carousel_slider = new Slider(carousel);
carousel_slider.create();
```
#### Css
```css
.carousel{
    .slider-wrapper{
        @media (min-width: 500px){
            --nb: 3;
        }	
    }
}
```

### Carousel full
#### html
```html
<div class="slider carousel-full">
    <div class="container">
        <div class="slider-control">
            <button class="prev">prev</button>
            <button class="next">next</button>
        </div>

        <ul class="slider-wrapper">
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
                <h3>Lorem</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis optio.
                </p>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/845/536/354" alt="">
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/885/536/354" alt="">
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/825/536/354" alt="">
                <h3>Lorem</h3>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/145/536/354" alt="">
                <h3>Lorem ipsum</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, blanditiis?
                </p>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
        </ul>
    </div>
</div>
```
#### javascript
```javascript
const carousel_full = document.querySelector('.carousel-full');
const carousel_full_slider = new Slider(carousel_full);
carousel_full.querySelector('.prev').onclick = () => carousel_full_slider.prev();
carousel_full.querySelector('.next').onclick = () => carousel_full_slider.next();
carousel_full_slider.create();s
```
#### Css
```css
.carousel-full{
    padding-bottom: 30px;
    
    .slider-control{	
        margin-bottom: 20px;
    }
    .slider-wrapper{
        @media (min-width: 500px){
            --nb: 3;
        }	
    }
}
```


### Carousel full (mobile) / Grid (desktop)
#### html
```html
<div class="slider carousel-full-grid">
    <div class="container">
        <ul class="slider-wrapper">
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
                <h3>Lorem</h3>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/845/536/354" alt="">
                <h3>Lorem</h3>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/885/536/354" alt="">
                <h3>Lorem</h3>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/825/536/354" alt="">
                <h3>Lorem</h3>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
            <li class="item shadow">
                <img loading="lazy" src="https://picsum.photos/id/145/536/354" alt="">
                <h3>Lorem ipsum</h3>
                <a href="https://google.fr" target="_blank">see</a>
            </li>
        </ul>
    </div>
</div>
```
#### javascript
```javascript
import Breakpoint from '../../modules/breakpoint/breakpoint.js';
const carousel_full_grid = document.querySelector('.carousel-full-grid');
const carousel_full_grid_slider = new Slider(carousel_full_grid);
const breakpoint =  new Breakpoint(600);
breakpoint.under = () => {
	carousel_full_grid_slider.create();
}
breakpoint.above = () => {
	carousel_full_grid_slider.destroy();
}
```
#### Css
```css
.carousel-full-grid{
	padding-bottom: 30px;

	@media (min-width: 600px){
		overflow: revert;

		.slider-wrapper{
			display: grid;
			grid-template-columns: repeat(3,1fr);
		}
	}
}
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/VwpBjWE)