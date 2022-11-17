const $radio = document.querySelectorAll('.rating__radio')
const $button = document.querySelector('.rating__submit')
const $main = document.querySelector('.main')
const $score = document.querySelector('.gratitude__score')

$button.addEventListener('click', e => {
    $radio.forEach(element => {
        if (element.checked) {
            $main.classList.add('main--active')
            $score.textContent = element.value
        } else {
            element.nextElementSibling.classList.add('rating__score--active')
            setTimeout(() => {
                element.nextElementSibling.classList.remove('rating__score--active')
            }, 500);
        }
    })
})