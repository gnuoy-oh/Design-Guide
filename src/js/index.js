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

const selectElements = document.querySelectorAll(".select");
const selectSuffix = "--open";

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

//  TODO: check
const selectOption = optionElement => {
  const selectBox = optionElement.closest(".select");
  const selectedElement = selectBox.querySelector(".select-selector__title");
  selectedElement.textContent = optionElement.textContent;
  selectedElement.style.color = "#000";
  selectBox.classList.remove(".select--open");
};

//  TODO: check
const detectSelect = () => {
  selectElements.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();
      console.log("click click");
      const targetElement = event.target;
      const isOptionElement = targetElement.classList.contains(
        "select-container__button"
      );

      if (isOptionElement) {
        selectOption(targetElement);
      }
    });
  });
};

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

const init = () => {
  toggleStatus();
  toggleSelect();
  // detectSelect();
};

init();
