const accordion_headers = document.querySelectorAll(".accordion__item_header"),
  accordion_contents = document.querySelectorAll(".accordion__item_content"),
  accordion_icons = document.querySelectorAll(".accordion__item_icon");

for (let i = 0; i < accordion_headers.length; i++) {
  accordion_headers[i].addEventListener("click", () => {
    for (let j = 0; j < accordion_contents.length; j++) {
      if (i == j) {
        accordion_contents[j].classList.toggle("content-transition");
      } else {
        accordion_contents[j].classList.remove("content-transition");
      }
    }

    for (let icon = 0; icon < accordion_icons.length; icon++) {
      if (i == icon) {
        accordion_icons[icon].classList.toggle("active");
      } else {
        accordion_icons[icon].classList.remove("active");
      }
    }
  });
}

/* Cooki */
const cooki = document.querySelector(".cook");
const cookiBtn = document.querySelector(".cook__btn");

cookiBtn.addEventListener("click", () => {
  cooki.classList.add("d-none");
});

/* Modal */
const modalClose = document.querySelectorAll(".main-modal__close");
const modalOverlay = document.querySelectorAll(".main-modal");

const addMoneyModal = document.querySelector(".form-main__submit_btn");

modalClose.forEach((item) => {
  item.addEventListener("click", () => {
    modalOverlay.forEach((item) => {
      item.classList.remove("active");
    });
  });
});

modalOverlay.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.remove("active");
  });
});

addMoneyModal.addEventListener("click", (event) => {
  const modal = document.querySelector(event.target.dataset.target);
  if (true) {
    modal.classList.add("active");
  }
});

/* Popper */
const popperButton = document.querySelector(".tooltip-btn");
const popperTooltip = document.querySelector(".tooltip-content");

const popperInstance = Popper.createPopper(popperButton, popperTooltip, {
  placement: "right",
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ],
});

function popperShow() {
  popperTooltip.setAttribute("data-show", "");
  popperInstance.update();
}

function popperHide() {
  popperTooltip.removeAttribute("data-show");
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach((event) => {
  popperButton.addEventListener(event, popperShow);
});

hideEvents.forEach((event) => {
  popperButton.addEventListener(event, popperHide);
});
