/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* //@ 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

//1. HTML 속성 : onclick="handler()" // 이벤트를 하나만 추가 할 수 있어서 사용 안함 가독성 유지보수 어려움
// 2. DOM 프로퍼티 : element.onclick = handler // onclick 프로퍼티가 하나라서 하나의 이벤트만 실행 복수의 이벤트헨들러 할당할수 없음
//@ 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

//@ - addEventListener
//@ - removeEventListener  추가하면 제거도 상황에 따라 같이 추가

// first.onclick = handler; // 단일 대상 하나만 사용 가능

//@  click, mousemove, mouseover, mouseout, mousedown, mouseup

// const first = getNode('.first');

//@ 2번 DOM 프로퍼티 이벤트
// function handler() {
//   console.log('DOM 프로퍼티 이벤트');
// }
// first.addEventListener('click', handleClick);

//@ 3번 이벤트 메서드
// function handleClick(e) {
//   // console.log('이벤트 메서드');
//   console.log(e.offsetX, e.offsetY);
// }

//? 유틸함수 const remove = bindEvent('.first', 'click', handleClick);
// 

//! setTimeout(() => {
//   // first.removeEventListener('click', handleClick);//@ 나에게 걸려 있는 핸들러이기에 제거 이벤트는 함수를 호출해야한다.
//   remove();
// }, 3000);

// first.addEventListener('click',handleClick);

//@ 이벤트 객체 (event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체를 만듬
// 객체에 이벤트에 관한 상세한 정보를 넣고 핸들러의 인수로 형태를 전달한다.

//# 축구공
const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${y - ball.offsetHeight / 2}px)`;
}

ground.addEventListener('click', handleClick);


//# 성능 향상 / 불필요한 이벤트 실행 방지
//# debounce 
// 사용자의 입력이 없을때 일정 시간이 지나면 이벤트가 발생
function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

//# throttle
function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

//# 이모티콘
ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">⭐</div>
  `

  insertLast(ground,template)
}));

