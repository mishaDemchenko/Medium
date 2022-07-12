let div = document.querySelector('.alert')

let button = document.querySelector('#alert__button')
let closee = document.querySelector('.alert__close')

function cls() {
  div.style.display = 'none';
}
button.addEventListener('click', function cls() {
  div.style.display = 'none';
})
closee.addEventListener('click', function cls() {
  div.style.display = 'none';
})