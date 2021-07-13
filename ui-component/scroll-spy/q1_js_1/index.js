import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);

let latestNavItem = navItems[0];

const intersectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const { isIntersecting, boundingClientRect } = entry;

    if (!isIntersecting) return;

    // 인지하는 지점 비율(threshold)을 50%로 설정, content 화면의 y축 50%에 도달하는 시점에 다음 인덱스를 가지는 페이지를 식별하기 위해 반올림
    const navItemIdx = Math.round(window.pageYOffset / boundingClientRect.height);
    const currentNavItem = navItems[navItemIdx];

    if (latestNavItem !== currentNavItem) {
      latestNavItem.classList.remove('on');
      currentNavItem.classList.add('on');
      latestNavItem = currentNavItem;
    }
    console.log('iodx', idx);
  });
}, {
  threshold: 0.5 // 인지 지점 비율
});

// 감시 대상(화면 숫자 영역) 등록
document.querySelectorAll('#contents > div').forEach(elem => intersectionObserver.observe(elem));

navElem.addEventListener("click", (e) => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});

// const offsetTops = contentItems.map((elem) => {
//   const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
//   return [ofs - clh / 2, ofs + clh / 2];
// });
//
// let latestNavItem = navItems[0];
//
// let timeoutId;
//
// const onChangeNavItemActivated = (scrollTop) => {
//   const foundOffsetTopIdx = offsetTops.findIndex(([from, to]) => from <= scrollTop && to > scrollTop);
//
//   const currentNavItem = navItems[foundOffsetTopIdx];
//   if (latestNavItem !== currentNavItem) {
//     latestNavItem && latestNavItem.classList.remove('on');
//     currentNavItem.classList.add('on');
//     latestNavItem = currentNavItem;
//   }
// }
//
// window.addEventListener("scroll", (e) => {
//   const { scrollTop } = e.target.scrollingElement;
//   // do something
//
//   if (timeoutId >= 0) {
//     clearTimeout(timeoutId);
//   }
//
//   timeoutId = setTimeout(() => onChangeNavItemActivated(scrollTop), 50);
// });
