# Slider Project on pure JS

[Click for demo](https://raw.githack.com/AlexBibig/TMS-JS/master/sliderProject/index.html)

# Installation

https://github.com/AlexBibig/TMS-JS.git - clone this repository and add files with name "light-slider" from folder "sliderProject' to your project

# Usage

1. Create a <div></div> with your own class name.

```html
<div class="main_slider"></div>
```

2. Put your images in img-tags, then put which one inside div-tags. All paste inside div with class "main_slider".

```html
<div class="main_slider">
  <div><img src="..." alt="your-image-number-1" /></div>
  <div><img src="..." alt="your-image-number-2" /></div>
  <div><img src="..." alt="your-image-number-3" /></div>
</div>
```

3. In

# Options

slidesWidth: number, default value = 300, //one image width in px
slidesHeight: number, default value = 200, //one image height in px
nav: boolean, default value = true, //navigation buttons for changing images (previous and next)
autoplay: boolean, default value = false, //the opportunity to change slides automatically, from left to right
autoplaySpeed: number, default value = 2000, //periodicity of changing images (if autoplay = true). ms
slides: number, default value = 1, //quantity of active images in one moment
loop: boolean, default value = true, //circular scrolling of slides
dots: boolean, default value = false, //navigation dots under the slider
pauseOnHover: boolean, default value = true, //pause autoplay when hover

For changing default options
