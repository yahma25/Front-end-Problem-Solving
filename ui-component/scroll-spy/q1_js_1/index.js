import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
const offsetTops = contentItems.map((elem) => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  return [ofs - clh / 2, ofs + clh / 2];
});

offsetTops.forEach(([ofs, clh]) => console.warn(ofs, clh));

let latestNavItem = null;

window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  // do something
  offsetTops.forEach(([ ofs, clh ]) => console.warn(ofs, clh));
  const foundOffsetTopIdx = offsetTops.findIndex(([from, to]) => from <= scrollTop && to > scrollTop);
  console.log('foundIdx', foundOffsetTopIdx, ', scrollTop', scrollTop);

  const currentNavItem = navItems[foundOffsetTopIdx];
  if (latestNavItem !== currentNavItem) {
    latestNavItem && latestNavItem.classList.remove('on');
    currentNavItem.classList.add('on');
    latestNavItem = currentNavItem;
  }
});

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

