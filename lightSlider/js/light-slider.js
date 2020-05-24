const defaultOptions = {
  slidesWidth: 300,
  slidesHeight: 200,
  nav: true, // сделать кнопки невидимыми или видимыми
  slidesQuantity: 3, // количество картинок (типа отобраджается 1,2,3)
};

let shift = 0;

let divs = document.querySelectorAll('div');
divs.forEach((el) => (el.lightSlider = lightSlider));

function addButtons() {
  if (defaultOptions.nav === true) {
    let navBlock = document.createElement('div');
    navBlock.className = 'nav_block';

    let prevBtn = document.createElement('button');
    prevBtn.className = 'btn prev';
    prevBtn.innerHTML = '<';
    prevBtn.addEventListener('click', prevSlide);

    let nextBtn = document.createElement('button');
    nextBtn.className = 'btn next';
    nextBtn.innerHTML = '>';
    nextBtn.addEventListener('click', nextSlide);

    navBlock.append(prevBtn);
    navBlock.append(nextBtn);
    mainSlider.append(navBlock);
  }
}
function nextSlide() {
  let slidersWrapper = document.querySelector('.light_slider .sliders_wrapper');
  let slidersWrapperWidth = slidersWrapper.offsetWidth;
  if (
    shift >
    -(
      slidersWrapperWidth -
      defaultOptions.slidesWidth * defaultOptions.slidesQuantity
    )
  ) {
    shift = shift - defaultOptions.slidesWidth;
  }
  slidersWrapper.style.transform = `translateX(${shift}px)`;
}
function prevSlide() {
  let slidersWrapper = document.querySelector('.light_slider .sliders_wrapper');
  let slidersWrapperWidth = slidersWrapper.offsetWidth;
  if (shift < 0) {
    shift += defaultOptions.slidesWidth;
  }
  slidersWrapper.style.transform = `translateX(${shift}px)`;
}

function transformHtmlSlider(mainSlider) {
  mainSlider.classList.add('light_slider');
  let slidesHtml = mainSlider.innerHTML;

  mainSlider.innerHTML = `<div class="sliders_window">
        <div class="sliders_wrapper">${slidesHtml}</div>
    </div>`;
}

function setStyle() {
  let slidersWindow = document.querySelector('.light_slider .sliders_window');

  slidersWindow.style.width = `${
    defaultOptions.slidesWidth * defaultOptions.slidesQuantity
  }px`;
  slidersWindow.style.height = `${defaultOptions.slidesHeight}px`;

  let slides = document.querySelectorAll('.light_slider .sliders_wrapper>div');
  let sliders_wrapper = document.querySelector(
    '.light_slider .sliders_wrapper'
  );

  sliders_wrapper.style.width = `${
    slides.length * defaultOptions.slidesWidth
  }px`;
  slides.forEach((el) => {
    el.classList.add('one_slide');
    el.style.width = `${defaultOptions.slidesWidth}px`;
    el.style.height = `${defaultOptions.slidesHeight}px`;
  });
}

function lightSlider() {
  transformHtmlSlider(this);
  setStyle();
  addButtons();
}
