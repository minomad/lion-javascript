import {
  attr,
  clearContents,
  diceAnimation,
  disableElement,
  enableElement,
  endScroll,
  getNode,
  getNodes,
  insertLast,
  invisibleElement,
  visibleElement,
} from './lib/index.js';

// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//       - 주사위 굴리기 버튼을 가져온다.
//       - 이벤트 핸들러를 연결한다.
//       - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어
// 4. 클로저 + IIFE 를 사용한 변수 보호

// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
//       - 기록 버튼 이벤트 바인딩
//       - hidden 속성 false 만들기
//       - 초기화 버튼 이벤트 바인딩
//       - hidden 속성 true 만들기
// 3. 주사위 값을 가져와서 랜더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

// [phase-3] 초기화 시키기
// 1. 아이템 지우기

// 배열 구조 분해 할당

const [startButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');

let count = 0;
let total = 0;

function createItem(value) {
  // 뿌려줄 템플릿 만들기
  return /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;
}

function renderRecordItem() {
  // 큐브의 data-dice 값 가져오기
  const diceValue = +attr('#cube', 'data-dice');

  insertLast(tbody, createItem(diceValue));

  endScroll(recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    //클로저
    if (!isClicked) {
      // 주사위 play
      stopAnimation = setInterval(diceAnimation, 100);
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      // 주사위 stop
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isClicked = !isClicked;
  };
})(); //IIFE

function handleRecord() {
  visibleElement(recordListWrapper);
  renderRecordItem();
}

function handleReset() {
  invisibleElement(recordListWrapper);
  disableElement(recordButton);
  disableElement(resetButton);

  clearContents(tbody);

  count = 0;
  total = 0;
}

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
