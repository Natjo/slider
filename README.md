
# Slider

![version](https://img.shields.io/github/manifest-json/v/Natjo/slider)

Slider


## Parameters
| Parameter | Type | Description |
| ------ | ------ | ------ |
| el | HTMLElement | Element |

## Methods
| Method | Type | Description |
| ------ | ------ | ------ |
| create | function | Activate the slider |
| destroy | function | Desactivate the slider |


## Usage

### Html
```html
<section class="strate">
	<div class="container">
		<div class="slider" aria-label="lorem">
			<button class="slider-btn prev" aria-label="Previous slides">Prev</button>
			<ul class="slider-content">
				<li class="item"><a href="/">1</a></li>
				<li class="item"><a href="/">2</a></li>
				<li class="item"><a href="/">3</a></li>
				<li class="item"><a href="/">4</a></li>
				<li class="item"><a href="/">5</a></li>
				<li class="item"><a href="/">6</a></li>
				<li class="item"><a href="/">7</a></li>
				<li class="item"><a href="/">8</a></li>
				<li class="item"><a href="/">9</a></li>
				<li class="item"><a href="/">10</a></li>
				<li class="item"><a href="/">11</a></li>
			</ul>
			<button class="slider-btn next" aria-label="Next slides">Next</button>
		</div>
	</div>
</section>
```

### javascript
```javascript
const slider = document.querySelector('.slider');
const myscroll = new scroller(slider);
myscroll.enable();
```

### css slider in container
```css
.strate{
	.slider{
		overflow: hidden;
		
		@media (min-width: 400px){
			--nb: 2;
		}
		@media (min-width: 8000px){
			--nb: 4;
		}
	}
}
```

### css slider fulll width
```css
.strate{
    overflow: hidden;
    
	.slider {
		@media (min-width: 600px){
			--nb: 3;
		}
	}
	.slider-pagination{
		display: none;
	}
}
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/JjOPMMX)