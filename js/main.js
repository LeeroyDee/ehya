document.getElementById("trigger").onclick = function () {
  open();
};

function open() {
  document.getElementById("menu").classList.toggle("header__left--show");
}
///лайки
let iconClick = document.querySelectorAll(".heart");

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
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
let video = ["M7lc1UVf-VE", "9xFYc3KCbHw", "RcBGYODF5Ks", "LuWf-Yx1azQ"];
let button = document.querySelectorAll(".history__button");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player" + i, {
      height: "100%",
      width: "100%",
      videoId: video[i],
      events: {
        onReady: onPlayerReady,
      },
    });
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}
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
//modal open close
var e = $("[data-toggle=modal]");
var c = $(".modal__close");
e.on("click", b);
c.on("click", d);
$(document).keyup(function (g) {
  if (g.key === "Escape" || g.keyCode === 27) {
    d(g);
  }
});

function b() {
  var g = $(".modal__overlay");
  var h = $(".modal__dialog");
  g.addClass("modal__overlay--visible");
  h.addClass("modal__dialog--visible");
}

function d(i) {
  i.preventDefault();
  var g = $(".modal__overlay");
  var h = $(".modal__dialog");
  g.removeClass("modal__overlay--visible");
  h.removeClass("modal__dialog--visible");
}
//валидатор
$("form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Enter your phone number",
        phone: "Your phone must be in the format of +7 (999) 999-99-99",
        minlength: "Phone must be at least 11 letters",
      },
    },
  });
});
$(".phone").mask("+7(999) 99-99-99");
