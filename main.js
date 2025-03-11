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

let hoursHtml = document.getElementById('hrs');
let minutesHtml = document.getElementById('min');
let secondsHtml = document.getElementById('sec');

function timeUntilTarget() {
  const now = new Date();
  const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 22, 0, 0);

  if (now > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1); // Переносимо на наступний день
  }

  const timeDifference = targetTime - now;
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

function updateCountdown() {
  const { hours, minutes, seconds } = timeUntilTarget();
  hoursHtml.innerHTML = hours.toString().padStart(2, '0');
  minutesHtml.innerHTML = minutes.toString().padStart(2, '0');
  secondsHtml.innerHTML = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Оновлення при завантаженні сторінки


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
  }, 1000);
});