# Slider Project on pure JS

[Click for demo](https://raw.githack.com/AlexBibig/TMS-JS/master/sliderProject/index.html)

# Installation

https://github.com/AlexBibig/TMS-JS.git - clone this repository and add files with name "light-slider" from folder "sliderProject' to your project

# Usage

1. Create a div with your own class name.

```html
<div class="main_slider"></div>
```

2. Put your images in img-tags, then put which one inside div-tags. All paste inside your div.

```html
<div class="main_slider">
  <div><img src="..." alt="your-image-number-1" /></div>
  <div><img src="..." alt="your-image-number-2" /></div>
  <div><img src="..." alt="your-image-number-3" /></div>
</div>
```

3. In your main js-file (for example, script.js) add to your div method "lightSlider()", like on example.

```js
let mainSlider = document.querySelector('.main_slider');
mainSlider.lightSlider();
```

# Options

List of default options:

1. slidesWidth: number, default value = 300, //one image width in px
2. slidesHeight: number, default value = 200, //one image height in px
3. nav: boolean, default value = true, //navigation buttons for changing images (previous and next)
4. autoplay: boolean, default value = false, //the opportunity to change slides automatically, from left to right
5. autoplaySpeed: number, default value = 2000, //periodicity of changing images (if autoplay = true). ms
6. slides: number, default value = 1, //quantity of active images in one moment
7. loop: boolean, default value = true, //circular scrolling of slides
8. dots: boolean, default value = false, //navigation dots under the slider
9. pauseOnHover: boolean, default value = true, //pause autoplay when hover

For changing default options you must transfer your own parameters to method "lightSlider()", like on example.

```js
let mainSlider = document.querySelector('.main_slider');
mainSlider.lightSlider({
  slides: 2,
  slidesWidth: 400,
  slidesHeight: 300,
  nav: false,
  autoplay: true,
  autoplaySpeed: 1000,
  loop: false,
  dots: false,
  pauseOnHover: false,
});
```
