document.getElementById("trigger").onclick = function () {
  open();
};

function open() {
  document.getElementById("menu").classList.toggle("header__left--show");
}
///лайки
// let iconClick = document.getElementsByClassName("card__heart")
// iconClick.addEventListener('click', function(){
//   console.log(iconClick)
//   if(this.classList.contains("like")){
//     this.classList.remove("like")
//   }else{this.classList.add('like')}
  
// })


const swiper = new Swiper('.reference-slider', {
  slidesPerView: 4,
  watchOverflow: true ,
  //spaceBetween: 6,
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});
swiper.update();
const sliderBook = new Swiper('.book', {
  slidesPerView: 5,
  watchOverflow: true ,
  //spaceBetween: 6,
  direction: 'horizontal',
  loop: false,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
