//@ open/send/event가 기본 template

/* 

[readyState]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

// const xhr = new XMLHttpRequest();

// // console.log(xhr.readyState); // 0

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// // 위 서버의 정보를 받아서 실행
// xhr.addEventListener('readystatechange', () => {

//   const {status,readyState,response} = xhr; // 구조분해 할당

//   if (status >= 200 && status < 400) {
//     if (readyState === 4) {

//       console.log(JSON.parse(response)); // 타입이 문자이기에 데이터로 변환
//       console.log('통과');
//     }
//   } else {
//     console.log('실패');
//   }

//   // console.log(xhr.status);

//   // console.log(xhr.readyState); // 2 3 4 여기서 성공 실패를 확인
// });

// // console.log(xhr.readyState); // 1

// xhr.send();

export const xhr = ({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) => {
  //# 처음부터 파라미터에 객체구조분해할당 하고 없다면 기본값 {}빈객체로 받음
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        onSuccess(JSON.parse(response)); //  response는 readystatechange이 서버에서 가져온 값을 받음
        console.log('통과');
      }
    } else {
      onFail('실패');
    }
  });

  xhr.send(JSON.stringify(body));
};

//# onSuccess콜백함수로 response를 호출 바디를 나중에 호출한 형태
// xhr({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result) {
//     console.log(result);
//   },
//   onFail(err) {
//     console.log(err);
//   },
//   body: {
//     name: 'tiger',
//   },
// });

//# 사용자 편리를 위해서 설계자가  함수 안에 메서드를 넣어 버림(조각)
//? 사용자가 파라미터가 무엇인지 알러면 TS로 타입을 정의

/**
 *  JSDoc
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */

xhr.get = (url, onSuccess, onFail) => { // 통신을 비동기적으로 처리하기 위해 xhr 함수를 호출하고, 이때 onSuccess와 onFail이라는 콜백 함수를 전달
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};
