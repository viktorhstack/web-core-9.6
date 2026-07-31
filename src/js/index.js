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
const repairTypesMore = document.querySelector('.repair-types__more');
const hiddenRepairTypes = document.querySelectorAll('.repair-types__card--hidden');

repairTypesMore.addEventListener('click', () => {
  hiddenRepairTypes.forEach((card) => {
    card.classList.toggle('show');
  });

  repairTypesMore.classList.toggle('active');

  if (repairTypesMore.classList.contains('active')) {
    repairTypesMore.textContent = 'Скрыть';
  } else {
    repairTypesMore.textContent = 'Показать все';
  }
});

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
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

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
let repairTypesSwiper = null;

function initRepairTypesSwiper() {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const repairTypesElement = document.querySelector(
    '.repair-types__cards'
  );

  if (isMobile && repairTypesElement && !repairTypesSwiper) {
    repairTypesSwiper = new Swiper('.repair-types__cards', {
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.repair-types__pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && repairTypesSwiper) {
    repairTypesSwiper.destroy(true, true);
    repairTypesSwiper = null;
  }
}
  let pricesSwiper = null;

function initPricesSwiper() {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const pricesElement = document.querySelector('.prices__services');

  if (isMobile && pricesElement && !pricesSwiper) {
    pricesSwiper = new Swiper('.prices__services', {
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.prices__pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && pricesSwiper) {
    pricesSwiper.destroy(true, true);
    pricesSwiper = null;
  }

}
function initMobileSwipers() {
  initBrandsSwiper();
  initRepairTypesSwiper();
  initPricesSwiper();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileSwipers);
} else {
  initMobileSwipers();
}

window.addEventListener('resize', initMobileSwipers);