var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Задаємо початковий час
let hoursHtml = document.getElementById('hrs');
let minutesHtml = document.getElementById('min');
let secondsHtml = document.getElementById('sec');

let hourss = 6;
let minutess = 45;
let secondss = 23;


const timerInterval = setInterval(() => {
  secondss--;

  if (secondss < 0) {
    secondss = 59;
    minutess--;

    if (minutess < 0) {
      minutess = 59;
      hourss--;

      if (hourss < 0) {
        alert('Час вийшов!');
        return;
      }
    }
  }


  hoursHtml.innerHTML = hourss.toString().padStart(2, 0);
  minutesHtml.innerHTML = minutess.toString().padStart(2, 0);
  secondsHtml.innerHTML = secondss.toString().padStart(2, 0);
}, 1000);


const AccordeonTopButton = document.querySelectorAll(".accordeon-top-button");

AccordeonTopButton.forEach((el) => {
  el.addEventListener("click", () => {
    const content = el.nextElementSibling;
    const img = el.lastElementChild;
    const number = el.firstElementChild.firstElementChild;

    if (content.style.maxHeight) {
      img.src = "./resault/plus.svg";
      content.style.maxHeight = null;
    } else {
      img.src = "./resault/minus.svg";

      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    console.log('test')
    document.body.classList.add('loaded');
  }, 3000);
});