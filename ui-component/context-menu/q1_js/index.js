// Write Javascript code here!
const app = document.getElementById('app');
app.addEventListener('click', (e) => {
  // context 1개만 출력하기 위해 기존 모든 item, context 초기 상태로 복원
  Array.from(app.getElementsByClassName('item')).forEach(clickedItem => {
    clickedItem.classList.remove('open');
    clickedItem.getElementsByClassName('context')[0].classList.remove('open');
  });

  const target = e.target;
  if (target.classList.contains('item')) {
    target.classList.add('open');

    const context = target.getElementsByClassName('context')[0];
    context.classList.add('open');

  } else if (target.classList.contains('context')) {
    target.classList.remove('open');
  }
});