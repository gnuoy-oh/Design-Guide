// ****************************
// SCSS
// ****************************

// 1. core와 product scss를 분리해서 import 하는 방법
// ----------------------------
// 장: core의 scss에서 파일을 임포트하는 경로가 깔끔함
// 단: 전체 테마 적용시 core/index.scss와 product/index.scss 에 두번 적용해야 함
// import '../style-core/scss/index.scss'
// import '../product-style/scss/index.scss'

// 2. product scss에 core를 포함해 impoart 하는 방법
// ----------------------------
// 장: 테마 변경시, product/index.scss 파일에 themes 선언 순서에 따라 전체 테마/부분 테마 변경 가능
// 단: core의 image, font 경로가 지저분해짐 → 변수로 지정시, 각 프로젝트마다 필요한 변수를 재선언 하여 유지할 수 있음
import "../scss/guide-index.scss";

// ****************************
// svg icon
// ****************************

function requireSvgAll(r) {
  r.keys().forEach(r);
}

requireSvgAll(require.context("../style-core/images", true, /\.svg$/));
requireSvgAll(require.context("../images", true, /\.svg$/));

// ****************************
// png img
// ****************************

function requirePngAll(r) {
  r.keys().forEach(r);
}

requirePngAll(require.context("../style-core/images", true, /\.png$/));
requirePngAll(require.context("../images", true, /\.png$/));

// ****************************
// UI Event
// ****************************

// toggle variation
const beforeSelectElement = document.querySelectorAll(
  ".toggle-switch__switch, .toggle-button__item, .pagination__link"
);
const afterSelectSuffix = "--selected";
const beforeOpenElement = document.querySelectorAll(
  ".accordion__head, .select"
);
const afterOpenSuffix = "--open";

// 토글 버튼 클릭시 --selected 추가
const toggleSelect = () => {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  beforeSelectElement.forEach(i => {
    i.addEventListener("click", event => {
      event.preventDefault();
      let afterSelectButton = i.classList[0].concat(afterSelectSuffix);

      // Test
      console.log(`Click Element => ${i.classList[0]}`);
      console.log(`Element + "--selected" => ${afterSelectButton}`);

      i.classList.toggle(afterSelectButton);
    });
  });
};

// 열리기 class 추가
const toggleOpen = () => {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  beforeOpenElement.forEach(i => {
    i.addEventListener("click", event => {
      event.preventDefault();
      let afterOpenButton = i.classList[0].concat(afterOpenSuffix);

      // Test
      console.log(`Click Element => ${i.classList[0]}`);
      console.log(`Element + "--open" => ${afterOpenButton}`);

      i.classList.toggle(afterOpenButton);
    });
  });
};

const init = () => {
  toggleSelect();
  toggleOpen();
};

init();
