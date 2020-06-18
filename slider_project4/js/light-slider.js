const defaultOptions = {
  slidesWidth: 300,
  slidesHeight: 200,
  nav: true,
  autoplay: false,
  autoplaySpeed: 2000,
  slides: 2,
  loop: false,
  dots: true,
  pauseOnHover: true,
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
  const loop = settings.loop !== undefined ? settings.loop : defaultOptions.loop;
  const autoplay = settings.autoplay !== undefined ? settings.autoplay : defaultOptions.autoplay;

  transformHtmlSlider(this, slidesWidth, slides, nav, loop);
  setStyle(slidesWidth, slides, slidesHeight, loop);

  if (autoplay) {
    setInterval(nextSlide, autoplaySpeed, slidesWidth, slides);
  }
}
function addNav(slidesWidth, slides, loop) {
  let navBlock = document.createElement('div');
  navBlock.className = 'nav_block';

  let prevBtn = document.createElement('button');
  prevBtn.className = 'btn prev';
  prevBtn.innerHTML = '<';
  prevBtn.addEventListener('click', () => prevSlide(slidesWidth, slides, loop));

  let nextBtn = document.createElement('button');
  nextBtn.className = 'btn next';
  nextBtn.innerHTML = '>';
  nextBtn.addEventListener('click', () => nextSlide(slidesWidth, slides, loop));

  navBlock.append(prevBtn);
  navBlock.append(nextBtn);
  mainSlider.append(navBlock);
}
function nextSlide(slidesWidth, slides, loop) {
  let slidersWrapper = document.querySelector('.light_slider .sliders_wrapper');
  slidersWrapper.style.transition = '0.5s';
  let slidersWrapperWidth = slidersWrapper.offsetWidth;
  let slidesArr = slidersWrapper.querySelectorAll('.one_slide');

  if (shift > -(slidersWrapperWidth - slidesWidth * slides)) {
    shift -= slidesWidth;
    let activeIndexArr = [];
    slidesArr.forEach((el, index) => {
      if (el.classList.contains('active')) {
        activeIndexArr.push(index);
      }
    });
    for (let i = 0; i < activeIndexArr.length; i++) {
      slidesArr[activeIndexArr[i]].classList.remove('active');
    }

    for (let i = 0; i < activeIndexArr.length; i++) {
      slidesArr[activeIndexArr[i] + 1].classList.add('active');
    }

    slidersWrapper.style.transform = `translateX(${shift}px)`;
  }

  if (loop && slidesArr[slidesArr.length - 1].classList.contains('active')) {
    function sdvig() {
      slidersWrapper.style.transition = 'none';
      slidersWrapper.style.transform = `translateX(${-slidesWidth * slides}px)`;
      slidesArr.forEach((el) => el.classList.remove('active'));
      for (let i = slides; i < slides * 2; i++) {
        slidesArr[i].classList.add('active');
      }
      shift = -slidesWidth * slides;
    }
    setTimeout(sdvig, 500);
  } else {
    slidersWrapper.style.transform = `translateX(${shift}px)`;
  }
}
function prevSlide(slidesWidth, slides, loop) {
  let slidersWrapper = document.querySelector('.light_slider .sliders_wrapper');
  slidersWrapper.style.transition = '0.5s';
  let slidesArr = slidersWrapper.querySelectorAll('.one_slide');
  if (shift < 0) {
    shift += slidesWidth;

    let activeIndexArr = [];
    slidesArr.forEach((el, index) => {
      if (el.classList.contains('active')) {
        activeIndexArr.push(index);
      }
    });
    for (let i = 0; i < activeIndexArr.length; i++) {
      slidesArr[activeIndexArr[i]].classList.remove('active');
    }

    for (let i = 0; i < activeIndexArr.length; i++) {
      slidesArr[activeIndexArr[i] - 1].classList.add('active');
    }
  }
  if (loop && slidesArr[0].classList.contains('active')) {
    slidersWrapper.style.transform = `translateX(${shift}px)`;
  }

  if (loop && slidesArr[0].classList.contains('active')) {
    function sdvig() {
      slidersWrapper.style.transition = 'none';
      slidersWrapper.style.transform = `translateX(${
        -(slidesArr.length - 2 * slides) * slidesWidth
      }px)`;
      slidesArr.forEach((el) => el.classList.remove('active'));
      for (let i = slides; i < slides * 2; i++) {
        slidesArr[slidesArr.length - 1 - i].classList.add('active');
      }
      shift = -slidesWidth * (slidesArr.length - 2 * slides);
    }
    setTimeout(sdvig, 500);
  } else {
    slidersWrapper.style.transform = `translateX(${shift}px)`;
  }
}
function transformHtmlSlider(mainSlider, slidesWidth, slides, nav, loop) {
  mainSlider.classList.add('light_slider');

  let slidesHtml = mainSlider.innerHTML;

  if (loop) {
    let slidesArr = document.querySelectorAll('.light_slider>div');
    console.log(slidesHtml);
    console.log(slidesArr);
    for (let i = 0; i < slides; i++) {
      slidesHtml += slidesArr[i].outerHTML;
    }
    console.log(slidesHtml);
    console.log(slidesArr);
    for (let i = 1; i <= slides; i++) {
      slidesHtml = slidesArr[slidesArr.length - i].outerHTML + slidesHtml;
    }
    console.log(slidesHtml);
    console.log(slidesArr);
  }

  mainSlider.innerHTML = `<div class="sliders_window">
        <div class="sliders_wrapper">${slidesHtml}</div>
    </div>`;

  if (nav) {
    addNav(slidesWidth, slides, loop);
  }
}
function setStyle(slidesWidth, slides, slidesHeight, loop) {
  let slidersWindow = document.querySelector('.light_slider .sliders_window');

  slidersWindow.style.width = `${slidesWidth * slides}px`;
  slidersWindow.style.height = `${slidesHeight}px`;

  let slidesArr = document.querySelectorAll('.light_slider .sliders_wrapper>div');
  let sliders_wrapper = document.querySelector('.light_slider .sliders_wrapper');

  sliders_wrapper.style.width = `${slidesArr.length * slidesWidth}px`;
  if (loop) {
    sliders_wrapper.style.transform = `translateX(${-slidesWidth}px)`;
    shift = -slidesWidth;
  }
  slidesArr.forEach((el, index) => {
    el.classList.add('one_slide');

    if (loop && (index === 1 || index <= slides) && index != 0) {
      el.classList.add('active');
    } else if (!loop && index < slides) el.classList.add('active');

    if (index === slidesArr.length - 1 || index === 0) el.classList.add('cloned');

    el.style.width = `${slidesWidth}px`;
    el.style.height = `${slidesHeight}px`;
  });
}
