# Design-Guide

- GitHub 주소: https://github.com/gnuoy-oh/Design-Guide.git

  - 브랜치: dev

- GitHub Subtree 주소: https://github.com/gnuoy-oh/Style-Core.git

  - 브랜치: dev

## 작업 방식

웹팩을 사용해서 환경 세팅을 했습니다.

1. 상위 폴더 위치에서 터미널을 키고 `npm install`을 칩니다.

2. 설치가 완료되면 `npm run dev`을 칩니다.

3. 실제 작업한 코드와 플러그인 코드는 `src` 폴더 하위에 있고, 작업한 코드는 웹팩을 통해 번들링이 되어 `dist` 폴더 하위로 출력됩니다.

4. `views/index.html`를 열어주세요!

## 요약 설명

BEM 방법론을 사용해서 클래스 작명을 했고, SCSS 전처리기를 사용해서 스타일 작성을 했습니다.

Style-Core 저장소를 GitHub Subtree로 참조해서 사용하고 있습니다.
