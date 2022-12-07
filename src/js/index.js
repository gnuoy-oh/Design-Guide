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

// Toggle Event

// --selected 추가
const toggleStatus = () => {
  const statusElements = document.querySelectorAll(
    ".pagination__link, .toggle-switch__switch"
  );
  const statusSuffix = "--selected";

  statusElements.forEach(i => {
    i.addEventListener("click", event => {
      event.preventDefault();
      let afterSelectButton = i.classList[0].concat(statusSuffix);

      i.classList.toggle(afterSelectButton);
    });
  });
};

// select-container Open | Close
const toggleSelect = () => {
  const selectElements = document.querySelectorAll(".select");
  const selectSuffix = "--open";
  selectElements.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();
      let afterOpenButton = element.classList[0].concat(selectSuffix);

      element.classList.toggle(afterOpenButton);
    });
  });
};

// select-container Text Input 2
const selectOption = optionElement => {
  const selectBox = optionElement.closest(".select");
  const selectedElement = selectBox.querySelector(".select-selector__title");
  selectedElement.textContent = optionElement.textContent;
  selectedElement.style.color = "#000";
  selectBox.classList.remove(".select--open");
};

// select-container Text Input 1
const detectSelect = () => {
  const selectContainerButtonElement = document.querySelectorAll(
    ".select-container__button"
  );

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

const closeAutocompleteElement = () => {
  const bodyElement = document.querySelector("body");

  bodyElement.addEventListener("click", event => {
    event.preventDefault();

    const eventTarget = event.target.className;
    const autocompleteElement = document.querySelectorAll(".autocomplete");

    console.log("autocompleteElement ->", autocompleteElement.NodeList);

    if (eventTarget == "text-input-group__input") {
      null;
    } else {
      console.log(autocompleteElement.classList.contains("autocomplete--open"));
      if (autocompleteElement.classList.contains("autocomplete--open")) {
        autocompleteElement.classList.remove("autocomplete--open");
      }
    }
  });
};

const openAutocomplete = targetInputElement => {
  const textInputGroup = targetInputElement.closest(".text-input-group");
  const autocompleteElement = textInputGroup.querySelector(".autocomplete");

  autocompleteElement
    ? autocompleteElement.classList.add("autocomplete--open")
    : null;
};

// text-input-group autocomplete Check
const detectAutocomplete = () => {
  const textInputGroupInputElements = document.querySelectorAll(
    ".text-input-group__input"
  );

  textInputGroupInputElements.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();

      const targetElement = event.target;
      openAutocomplete(targetElement);
    });
  });
};

const init = () => {
  toggleStatus();
  toggleSelect();
  detectSelect();
  detectAutocomplete();
  // closeAutocompleteElement();
};

init();
