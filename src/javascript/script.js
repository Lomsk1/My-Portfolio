"use strict";

const navs = document.querySelectorAll(".nav__link");

const navBtn =document.querySelector('.nav_mobile-button');
const navDiv = document.querySelector('.nav-mobile-div');

const submitBTN = document.querySelector('#submit');

///////////// FUNCTIONS ///////////////

navs.forEach(el => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const targetPosition = document.querySelector(target);
    targetPosition.scrollIntoView({
      behavior: "smooth",
    });

    navDiv.classList.add('hidden')
  });
});

navBtn.addEventListener('click', function(){
  navDiv.classList.toggle('hidden')
})

submitBTN.addEventListener('click', function(e){
  e.preventDefault()
})

console.log('script loaded');