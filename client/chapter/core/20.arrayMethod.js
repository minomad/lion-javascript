/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

const { RuleTester } = require('eslint');

//@ Array.isArray //배열인지 확인
function isArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

/* //! 요소 순환 ---------------------------- */

//@ forEach 값을 반환하지 않음.

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

arr.forEach((item) => {
  console.log(item);
});

people.forEach((item) => {
  console.log(item.name);
});

//@ 이벤트 위임을 하는 것이 가장 좋음
const span = document.querySelectorAll('span');

span.forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log(this, index);
  });
});

/* //!원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
//@ reverse
//@ splice 맥가이버 칼 추가 제거
arr.splice(1, 0, 5, 13);

//@ sort
//@compare 함수를 사용
// 반환 값 < 0 : a가 b보다 앞에 있어어야
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않음
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
// 리턴된 값으로 비교

arr.sort((a, b) => {
  return b - a;
});

/* //! 새로운 배열 반환 (원본 유지) ------------------------ */

const user = ['선범', '효윤', '준석'];

//@ concat 보다 스프레드가 좋다.
const newArray = arr.concat(user);

//@ slice
const slice = arr.slice(2, 5);

//@ toSorted
arr.toSorted((a, b) => {
  return b - a;
});

//@ toReversed (시작,제거)
const toReversed = arr.toReversed();

//@ toSpliced
const toSpliced = arr.toSpliced(2, 0, 'js', 'css', 'react');

//# map 중요
// const job = people.map((item, index) => {
//   return `<div>${item.profession}</div>`;
// });

// function render(){
//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }

const job = people.map((item, index) => {
  return /* html */ `
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `;
});

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

console.log(job);

//피플 자로규조에서 나이만 모아놓은 배열 --> 가공처리 나이

const newAge = people.map((item) => item.age -1)

/* //! 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* //! 요소 찾기 ------------------------------ */

// find 아이템 하나를 찾아서 반환
const find = people.find((item) => {
  return item.name === '김희소';
});

// findIndex index는 거의다 순서를 반환
const findIndex = people.findIndex((item) => {
  return item.id === 3;
});

/* //! 요소 걸러내기 --------------------------- */

//@ filter 리액트에서 많이 쓰임 배열을 반환 
const filter = people.filter((item) => {
  return item.id === 3;
});

/* //! 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const total = people.reduce((acc,cur) => {
  return acc + cur.age
},0)

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');

document.body.insertAdjacentHTML('beforeend',template);

// reduceRight

/* //! string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아'
// split 문자 -> 배열
const string = str.split('');

// join 배열 -> 문자 
const join = join.join('');
