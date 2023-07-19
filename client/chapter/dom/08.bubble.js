/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
//@ 버블버블 게임처럼 이벤트가 발생됨

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click',()=>{
  // e.stopPropagation()
  console.log('%c section','color:orange');
},true)

article.addEventListener('click',()=>{
  // e.stopPropagation()
  console.log('%c article','color:dodgerblue');
},true)

p.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('%c p','color:hotpink');
},true) // ture 뒤에서 앞으로 이벤트가 발생 캡처링

/* 캡처링 ----------------------------------------------------------------- */
