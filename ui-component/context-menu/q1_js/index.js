import './style.css';

// Write Javascript code here!
let latestClickedElem = null;

document.addEventListener('click', () => {
  if (latestClickedElem) {
    latestClickedElem.classList.remove('open');
    latestClickedElem = null;
  }
});

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', (e) => {
  const clickedElem = e.target;

  if (clickedElem.classList.contains('item')) {
    e.stopPropagation();

    latestClickedElem?.classList.remove('open');

    clickedElem.classList.add('open');
    latestClickedElem = clickedElem;
  }
});

// const app = document.getElementById('app');
// app.addEventListener('click', (e) => {
//   // context 1개만 출력하기 위해 기존 모든 item, context 초기 상태로 복원
//   Array.from(app.getElementsByClassName('item')).forEach(clickedItem => {
//     clickedItem.classList.remove('open');
//     clickedItem.getElementsByClassName('context')[0].classList.remove('open');
//   });
//
//   const target = e.target;
//   if (target.classList.contains('item')) {
//     target.classList.add('open');
//
//     const context = target.getElementsByClassName('context')[0];
//     context.classList.add('open');
//
//   } else if (target.classList.contains('context')) {
//     target.classList.remove('open');
//   }
// });