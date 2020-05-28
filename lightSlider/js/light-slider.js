const defaultOptions = {
  slidesWidth: 300,
  slidesHeight: 200,
  nav: true,
  autoplay: false,
  autoplaySpeed: 2000,
  slides: 2,
  dots: true,
};
let shift = 0;

let divs = document.querySelectorAll('div');
divs.forEach((el) => (el.lightSlider = lightSlider));

function lightSlider(settings = {}) {
  const slidesWidth = settings.slidesWidth || defaultOptions.slidesWidth;
  const slides = settings.slides || defaultOptions.slides;
  const slidesHeight = settings.slidesHeight || defaultOptions.slidesHeight;
  const autoplaySpeed = settings.autoplaySpeed || defaultOptions.autoplaySpeed;
  const nav = settings.nav !== undefined ? settings.nav : defaultOptions.nav;
  const dots = settings.dots !== undefined ? settings.dots : defaultOptions.dots;
  const autoplay = settings.autoplay !== undefined ? settings.autoplay : defaultOptions.autoplay;

  transformHtmlSlider(this, slidesWidth, slides, nav, dots);
  setStyle(slidesWidth, slides, slidesHeight);

  if (autoplay) {
    setInterval(nextSlide, autoplaySpeed, slidesWidth, slides);
  }
}
function addNav(slidesWidth, slides) {
  let navBlock = document.createElement('div');
  navBlock.className = 'nav_block';

  let prevBtn = document.createElement('button');
  prevBtn.className = 'btn prev';
  prevBtn.innerHTML = '<';
  prevBtn.addEventListener('click', () => prevSlide(slidesWidth, slides));

  let nextBtn = document.createElement('button');
  nextBtn.className = 'btn next';
  nextBtn.innerHTML = '>';
  nextBtn.addEventListener('click', () => nextSlide(slidesWidth, slides));

  navBlock.append(prevBtn);
  navBlock.append(nextBtn);
  mainSlider.append(navBlock);
}
function addDot() {
  let dotBlock = document.createElement('div');
  dotBlock.className = 'dot_block';

  picturesArr = Array.from(document.querySelector('.sliders_wrapper').children);

  picturesArr.forEach((el) => {
    let dot = document.createElement('a');
    dot.className = 'dot_item';
    dot.innerHTML = '.';
    dotBlock.append(dot);
  });

  mainSlider.append(dotBlock);
}
function nextSlide(slidesWidth, slides) {
  let slidersWrapper = document.querySelector('.light_slider .sliders_wrapper');
  let slidersWrapperWidth = slidersWrapper.offsetWidth;
  if (shift > -(slidersWrapperWidth - slidesWidth * slides)) {
    shift -= slidesWidth;
  }
  slidersWrapper.style.transform = `translateX(${shift}px)`;
}
function prevSlide(slidesWidth, slides) {
  let slidersWrapper = document.querySelector('.light_slider .sliders_wrapper');
  if (shift < 0) {
    shift += slidesWidth;
  }
  slidersWrapper.style.transform = `translateX(${shift}px)`;
}
function transformHtmlSlider(mainSlider, slidesWidth, slides, nav, dots) {
  mainSlider.classList.add('light_slider');
  let slidesHtml = mainSlider.innerHTML;

  mainSlider.innerHTML = `<div class="sliders_window">
      <div class="sliders_wrapper">${slidesHtml}</div>
  </div>`;

  if (nav) {
    addNav(slidesWidth, slides);
  }
  if (dots) {
    addDot(slides);
  }
}
function setStyle(slidesWidth, slides, slidesHeight) {
  let slidersWindow = document.querySelector('.light_slider .sliders_window');

  slidersWindow.style.width = `${slidesWidth * slides}px`;
  slidersWindow.style.height = `${slidesHeight}px`;

  let slidesArr = document.querySelectorAll('.light_slider .sliders_wrapper>div');
  let sliders_wrapper = document.querySelector('.light_slider .sliders_wrapper');

  sliders_wrapper.style.width = `${slidesArr.length * slidesWidth}px`;
  slidesArr.forEach((el) => {
    el.classList.add('one_slide');
    el.style.width = `${slidesWidth}px`;
    el.style.height = `${slidesHeight}px`;
  });
}
