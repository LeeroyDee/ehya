document.getElementById("trigger").onclick = function () {
  open();
};

function open() {
  document.getElementById("menu").classList.toggle("header__left--show");
}
///лайки
let iconClick = document.querySelectorAll(".heart");
console.log(iconClick);
for (let i = 0; i < iconClick.length; i++) {
  iconClick[i].addEventListener("click", function name(e) {
    iconClick[i].classList.toggle("like");
  });
}

//////////////////////////////////////////////////////
const swiper = new Swiper(".slider", {
  slidesPerView: 4,
  watchOverflow: true,
  spaceBetween: 26,
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".reference-button--next",
    prevEl: ".reference-button--prev",
    disabledClass: "reference-button--disabled",
  },
});

const sliderBook = new Swiper(".books", {
  slidesPerView: 5,
  watchOverflow: true,
  spaceBetween: 27,
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-book__button--next",
    prevEl: ".slider-book__button--prev",
    disabledClass: "slider-book__button--disabled",
  },
});
//video

//PhPmailer
function send(event, php) {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var req = new XMLHttpRequest();
  req.open("POST", php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response); // Ебанный internet explorer 11
      console.log(json);

      // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
      if (json.result == "success") {
        // Если сообщение отправлено
        alert("Сообщение отправлено");
      } else {
        // Если произошла ошибка
        alert("Ошибка. Сообщение не отправлено");
      }
      // Если не удалось связаться с php файлом
    } else {
      alert("Ошибка сервера. Номер: " + req.status);
    }
  };

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  req.send(new FormData(event.target));
}
