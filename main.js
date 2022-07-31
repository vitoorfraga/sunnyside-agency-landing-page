const btnMenu = document.querySelector('.btn-menu-mobile')
const menuMobile = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', function () {
  console.log('clicou')
  menuMobile.classList.toggle('active')
})