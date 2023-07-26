// const response = await fetch('https://pokeapi.co/api/v2/pokemon/133'); // 첫번째는 호출상태
// console.log(response); // ok:true 통신됨

// if (response.ok) {
//   const data = await response.json(); // 두번째는 결과물 json으로 데이터를 가져옴 xhr는 변환메서드를 사용해야하는데 fetch는 json이 다 해줌
//   console.log(data);
// }
//https://jsonplaceholder.typicode.com/users

const URL = 'https://pokeapi.co/api/v2/pokemon/133';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const pokemon = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },// 여기 headers는 카피의 카피다 깊은복사
  };

  //fetch는 프라미스 객체를 포함하니깐 respone를 사용할 수 있고 프라미스 객체 값을 repone에 담는것
  const response = await fetch(url, restOptions); //xhr open 유사 응답기다리고 결과값 받아서 할당
  console.log(response);

  if (response.ok) {//xhr status 200번대 //.json 서버 응답의 JSON 데이터를 파싱하여 JavaScript 객체로 변환
    response.data = await response.json(); //xhr response 객체에 .data key를 추가하고 거기에 값을 할당 []없애고 안에 객체들을 할당한다

  }
  return response;//url에 사용자가 매개변수로 보낼 내용(options)을 추가한 객체 값들을 배열로 가지고 
};

// pokemon 함수는 프라미스를 담고 있는 함수니깐 awiat으로 get하고
const response = await pokemon({
  url: URL,
  method: 'GET',
});

// get한 것을 다시 userData  에 할당하면 return response 값을 명시적으로 사용가능
const userData = response.data;

console.log(userData);
console.log(userData.name);




pokemon.get = (url,options)=>{
  return pokemon({
    url,
    ...options
  })
}

pokemon.post = (url,body,options)=>{
  return pokemon({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

pokemon.delete = (url,options)=>{
  return pokemon({
    method:'DELETE',
    url,
    ...options
  })
}

pokemon.put = (url,body,options)=>{
  return pokemon({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

// const data = await pokemon.get(URL);

// console.log(data);

// userData.forEach((item)=>{
//   console.log(item);
// })
// console.log(await pokemon('https://pokeapi.co/api/v2/pokemon/133'));
