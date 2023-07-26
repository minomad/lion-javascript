# fetch

fetch는 네트워크에 데이터를 요청하고 받아서 사용하는 용도

promisee 객체가 포함되어 있기에 await 사용가능

서버로 부터 받아오는 정보(값)을 사용할려면 await로 할당하고 다시 재할당이 필요함 

```js
let promisee = fetch(url, options)
```
method 기본값은 GET이고 POST,PUT,DELETE이 있음

options에 들어갈 내용들
```js
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
```
fetch의 setter
```js
 const pokemon = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },// 여기 headers는 카피의 카피다 깊은복사
  };

  //fetch는 promise 객체를 포함하니깐 respone를 사용할 수 있고 promise 객체 값을 repone에 담는것
  const response = await fetch(url, restOptions); //xhr open 유사 응답기다리고 결과값 받아서 할당

  if (response.ok) {//xhr status 200번대 //.json 서버 응답의 JSON 데이터를 파싱하여 JavaScript 객체로 변환
    response.data = await response.json(); //xhr response 객체에 .data key를 추가하고 거기에 값을 할당 []없애고 안에 객체들을 할당한다
  }
  return response;//url에 사용자가 매개변수로 보낼 내용(options)을 추가한 객체 값들을 배열로 가지고 
};
```
