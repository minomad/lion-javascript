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

const xhr = (options) => {
  const {
    method = 'GET', 
    url = '', 
    onSuccess = null, 
    onFail = null, 
    body = null, 
    headers = {
      'Content-Type':'application.json',
      'Access-Control-Allow-Origin':'*'
    }
  } = options;
  
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
xhr({
  url:'https://jsonplaceholder.typicode.com/users',
  onSuccess:()=>{},
  onFail:()=>{},
  body:{
    name:'tiger'
  }
});
