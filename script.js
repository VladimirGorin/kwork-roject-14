//burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close-menu');
burger.addEventListener('click', () => {
    nav.classList.toggle('showMenu');
});
close.addEventListener('click', () => {
    nav.classList.remove('showMenu');
});


if (window.innerWidth <= 768) {
  let headerBtnCallBack = document.querySelector('.header__btn-callback');
  document.querySelector('.nav__list').append(headerBtnCallBack);
}


//dropdown 
const btnDropdown = document.querySelectorAll('.dropdown__btn');
btnDropdown.forEach(function(item) {
    item.addEventListener('click',() => {
        item.nextElementSibling.classList.toggle('showDrop');
        item.firstElementChild.classList.toggle('transform-arrow');
    });
});

//cardSlider
if (window.innerWidth > 769) {
  let cardImg = document.querySelectorAll('.card-img');
  cardImg.forEach(function(item) {
    item.addEventListener('click' , () => {
      item.nextElementSibling.classList.toggle('show-card-gallery')
    })
      let cardImgClose = document.querySelectorAll('.card-slider__close')
      cardImgClose.forEach(function(close) {
        close.addEventListener('click', () => {
          item.nextElementSibling.classList.remove('show-card-gallery')
        })
      })
      console.log(cardImgClose)
  })
}


if(window.innerWidth <= 991) {
  const filter = document.querySelector('.filter');
  const bgSlider = document.querySelector('.bg-slider');
  
  bgSlider.after(filter);
}
