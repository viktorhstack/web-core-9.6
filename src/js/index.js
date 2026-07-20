import '../scss/style.scss'

import Swiper from 'swiper/bundle';

const showMoreButton = document.querySelector('.show__more-btn')
const hiddenBrands = document.querySelectorAll('.hidden__brand')

showMoreButton.addEventListener('click', () => {
  hiddenBrands.forEach((brand) => {
    brand.classList.toggle('show')
  })

  showMoreButton.classList.toggle('active')

  if (showMoreButton.classList.contains('active')) {
    showMoreButton.textContent = 'Скрыть'
  } else {
    showMoreButton.textContent = 'Показать все'
  }
})

const readMoreButton = document.querySelector('.services__more')
const servicesText = document.querySelector('.services__text')

readMoreButton.addEventListener('click', () => {
  servicesText.classList.toggle('show')
  readMoreButton.classList.toggle('active')


if (readMoreButton .classList.contains('active')) {
    readMoreButton.textContent = 'Скрыть' 
} else {
        readMoreButton.textContent = 'Читать далее'
    }
})

const menuButton = document.querySelector('.header__menu-button');
const closeButton = document.querySelector('.sidebar__close-button');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');

const closeSidebar = () => {
  sidebar.classList.remove('sidebar--open');
  sidebarOverlay.classList.remove('sidebar-overlay--open');
};

if (menuButton && closeButton && sidebar && sidebarOverlay) {
  menuButton.addEventListener('click', () => {
    sidebar.classList.add('sidebar--open');
    sidebarOverlay.classList.add('sidebar-overlay--open');
  });

  closeButton.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);
}

const button = document.querySelector('.services__more');
const hiddenText = document.querySelector('.services__hidden-text');
const tabletText = document.querySelector('.services__text--tablet');

if (button && hiddenText && tabletText) {
  button.addEventListener('click', () => {
    hiddenText.classList.toggle('open');
    tabletText.classList.toggle('open');

    button.textContent = hiddenText.classList.contains('open')
      ? 'Скрыть'
      : 'Читать далее';
  });
}
let brandsSwiper = null;

function initBrandsSwiper() {
  const isMobile = window.matchMedia('(max-width: 320px)').matches;

  if (isMobile && !brandsSwiper) {
    brandsSwiper = new Swiper('.service__brands', {
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.service__brands .swiper-pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && brandsSwiper) {
    brandsSwiper.destroy(true, true);
    brandsSwiper = null;
  }
}

document.addEventListener('DOMContentLoaded', initBrandsSwiper);
window.addEventListener('resize', initBrandsSwiper);