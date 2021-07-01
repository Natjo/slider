
# Carousel

![version](https://img.shields.io/github/manifest-json/v/Natjo/slider)

Light carousel

## Parameters
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
|  |  | - |  |


## Usage

### Slider full
#### html
```html
<div class="slider-full">
    <div class="slider-container">
        <ul class="slider">
            <li class="item">
                <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
            </li>
            <li class="item">
                <img loading="lazy" src="https://picsum.photos/id/845/536/354" alt="">
            </li>
            <li class="item">
                <img loading="lazy" src="https://picsum.photos/id/885/536/354" alt="">
            </li>
            <li class="item">
                <img loading="lazy" src="https://picsum.photos/id/825/536/354" alt="">
            </li>
            <li class="item">
                <img loading="lazy" src="https://picsum.photos/id/145/536/354" alt="">
            </li>
            <li class="item">
                <img loading="lazy" src="https://picsum.photos/id/55/536/354" alt="">
            </li>
            <li class="item">
                <img loading="lazy" src="https://picsum.photos/id/88/536/354" alt="">
            </li>
        </ul>
    </div>
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
<div class="mySlider">
    <div class="container">
        <div class="slider-container">
            <ul class="slider">
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
                    <h3>Lorem</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem, reiciendis optio. Corrupti.
                    </p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/845/536/354" alt="">
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/885/536/354" alt="">
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/825/536/354" alt="">
                    <h3>Lorem</h3>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/145/536/354" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, blanditiis?
                    </p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/55/536/354" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor?</p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/88/536/354" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor?</p>
                </li>
            </ul>
        </div>
    </div>
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
<div class="carousel">
    <div class="container">
        <div class="slider-container">
            <ul class="slider">
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
                    <h3>Lorem</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis optio.
                    </p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/845/536/354" alt="">
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/885/536/354" alt="">
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/825/536/354" alt="">
                    <h3>Lorem</h3>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/145/536/354" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, blanditiis?
                    </p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/55/536/354" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor?</p>
                    <a href="https://google.fr" target="_blank">more</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/88/536/354" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor?</p>
                </li>
            </ul>
        </div>
    </div>
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
    .slider-container{
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .slider{
        @media (min-width: 500px){
            --nb: 3;
        }	
    }
}
```

### Carousel full
#### html
```html
<div class="carousel-full">
    <div class="slider-container">
        <div class="container">
            <div class="slider-control">
                <button class="prev">prev</button>
                <button class="next">next</button>
            </div>

            <ul class="slider">
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/157/536/354" alt="">
                    <h3>Lorem</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis optio.
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
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/55/536/354" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor?</p>
                    <a href="https://google.fr" target="_blank">see</a>
                </li>
                <li class="item">
                    <img loading="lazy" src="https://picsum.photos/id/88/536/354" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor?</p>
                </li>
            </ul>
        </div>
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
    padding: 30px 0;
	
    .slider-control{
        margin-bottom: 20px;
    }
    .slider{
        @media (min-width: 500px){
            --nb: 3;
        }	
    }
}
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/VwpBjWE)