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


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  //spaceBetween: 3,
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
