import { insertLast } from '../dom/index.js';
import { xhrPromise } from '../utils/index.js';
// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

// const first = getNode('.first');
// const second = getNode('.second');

// delay(() => {
//   console.log(1);
//   first.style.top = '-100px';

//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';

//     delay(() => {
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     });
//     second.style.top = '100px';
//     console.log('b');
//   });
// });

//#delayP 함수를 실행하면 Promise 객체를 반환
//구조분해한객체 블록스코프

//! 객체 합성 mixin 함수을 실행할때 매개변수에 객체를 전달하는데 기본값은 defaultOptions이고 사용자가 options을 사용하면 defaultOptions을 덮어씀

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류 발생',
};

export function delayP(options) {
  let config = { ...defaultOptions }; //얕은 복사로 실제 데이터에 접근 못 하도록 하기위함

  if (typeof options === 'number') {
    config.timeout = options;
  }
  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options }; //data를 변경할때 재할당
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  //동시 실행은 불가능 둘중 하나
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data); //성공
      } else {
        reject({ message: errorMessage }); //실패
      }
    }, timeout);
  });
}

// delayP({ shouldReject: false })
//   .then((res) => {
//     // console.log(res);
//   })
//   .catch(({ message }) => {
//     alert(message);
//   })
//   .finally(() => {
//     // console.log('어쨋든 실행');
//   });

// delayP()
// .then(
//   (name,age)=>{
//   console.log(name);
// })
// .catch((err)=>{
//   console.log(err);
// })

// async function delayA() {
//   return '성공';
// }

// const data = await delayA();

// console.log(data);

async function getData() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/600');

  const pokemon = await data;

  console.log(pokemon.sprites['front_default']);
  insertLast(document.body, `<img src="${pokemon.sprites['front_default']}">`);
}

// getData()
