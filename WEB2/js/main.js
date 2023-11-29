// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

let timer = setInterval(function(){
    slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  },4000);



// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
      slide.style.transition = '0.3s';
    } else {
      slide.style.display = 'none';
      slide.style.transition = '0.3s';
    }
  });
}

// Инициализация слайдера
updateSlider();



//anime.js



/*
anime({
  targets: '.item_pacc .item2',
  translateX: 270,
  delay: anime.stagger(300, {easing: 'easeOutQuad'})
});
*/




function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      var animation = anime({
        targets: '.item_pacc .item2',
        translateX: 270,
        
        delay: function(el, i) { return i * 600; },
        easing: 'easeInOutSine'
      });
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.item_pacc');
for (let elm of elements) {
  observer.observe(elm);
}