import { pokemon, getNode as $, renderUserCard, changeColor, delayP, renderSpinner, renderEmpty, getNode, attr, removeClass } from './lib/index.js';
/*global gsap*/

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP({ timeout: 1500 });

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await pokemon.get('https://jsonplaceholder.typicode.com/users');

    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card');

    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (err) {
    console.log('유저 데이터가 없습니다.');
    renderEmpty(userCardInner);
    // location.href='404.html'
  }
}
renderUserList();


function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if(!article || !button) return;

  const id = attr(article,'data-index').slice(5);

  pokemon.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  
}

userCardInner.addEventListener('click',handleDelete)

