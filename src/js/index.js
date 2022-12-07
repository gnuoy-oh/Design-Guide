// ---------------------------
// SCSS
// ---------------------------

import "../scss/project-index.scss";

// ---------------------------
// svg icon
// ---------------------------

function requireSvgAll(r) {
  r.keys().forEach(r);
}

requireSvgAll(require.context("../style-core/images", true, /\.svg$/));
requireSvgAll(require.context("../images", true, /\.svg$/));

// ---------------------------
// png img
// ---------------------------

function requirePngAll(r) {
  r.keys().forEach(r);
}

requirePngAll(require.context("../style-core/images", true, /\.png$/));
requirePngAll(require.context("../images", true, /\.png$/));

// ****************************
// UI Event
// ****************************

const statusElements = document.querySelectorAll(
  ".pagination__link, .toggle-switch__switch"
);
const statusSuffix = "--selected";

// --selected 추가
const toggleStatus = () => {
  statusElements.forEach(i => {
    i.addEventListener("click", event => {
      event.preventDefault();
      let afterSelectButton = i.classList[0].concat(statusSuffix);

      i.classList.toggle(afterSelectButton);
    });
  });
};

const selectElements = document.querySelectorAll(".select");
const selectContainerButtonElement = document.querySelectorAll(
  ".select-container__button"
);
const selectSuffix = "--open";

// --open 추가
const toggleSelect = () => {
  selectElements.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();
      let afterOpenButton = element.classList[0].concat(selectSuffix);

      element.classList.toggle(afterOpenButton);
    });
  });
};

const selectOption = optionElement => {
  const selectBox = optionElement.closest(".select");
  const selectedElement = selectBox.querySelector(".select-selector__title");
  selectedElement.textContent = optionElement.textContent;
  selectedElement.style.color = "#000";
  selectBox.classList.remove(".select--open");
};

const detectSelect = () => {
  selectContainerButtonElement.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();

      const targetElement = event.target;
      const isOptionElement =
        targetElement.classList.contains("select-container__button") |
        targetElement.classList.contains("select-container__text");

      if (isOptionElement) {
        selectOption(targetElement);
      }
    });
  });
};

const init = () => {
  toggleStatus();
  toggleSelect();
  detectSelect();
};

init();
