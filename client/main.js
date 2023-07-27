import { pokemon, getNode as $, renderUserCard, changeColor, delayP, renderSpinner, renderEmpty } from './lib/index.js';
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
      stagger: 0.2,
    });
  } catch (err) {
    console.log('유저 데이터가 없습니다.');
    renderEmpty(userCardInner);
  }
}
renderUserList();
