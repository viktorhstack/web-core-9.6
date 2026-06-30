import '../scss/style.scss'

import '../scss/style.scss'

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


