/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* //# 클래스를 사용한 위임 ---------------- */
//@ 부모에 이벤트를 등록해서 이벤트를 처리를 단순화하고 리소스를 절약하는 것
//@ e.currentTarget; // 이벤트를 발생시킨 대상 일반함수 this랑 같음
//@ e.target; //처음 만난 이벤트

const container = getNode('.container');

function handleDelegation(e) {

  let target = e.target;

  // let className = attr(target,'class');
  // let dataName = attr(target, 'data-name');
  // let className = target.getAttribute('class');
  // console.log(target.getAttribute('class'));
  // if (target.getAttribute('class') === 'a') {
  //   console.log('A 버튼 클릭!');
  // }
  // if (target.getAttribute('class') === 'b') {
  //   console.log('B 버튼 클릭!');
  // }
  // if (target.getAttribute('class') === 'c') {
  //   console.log('C 버튼 클릭!');
  // }
  // if (target.getAttribute('class') === 'd') {
  //   console.log('D 버튼 클릭!');
  // }
  // if (dataName === 'D') {
  //   console.log('D 버튼 클릭!');
  //   }

  //@ closest 활용
  let li = target.closest('li');

  if(!li) return;

  let className = attr(li,'class');
  let dataName = attr(li,'data-name');

  
  if(className === 'home'){
    console.log('홈 실행!');
  }

}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
