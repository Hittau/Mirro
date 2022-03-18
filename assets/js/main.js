console.log("hello")

const myBurger = document.querySelector('.header__burger');
const myNav = document.querySelector('.nav');
const myCol = document.querySelector('.nav-col');

myBurger.onclick = function() {
   myNav.classList.toggle('active');
   myBurger.classList.toggle('active')
};