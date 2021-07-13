import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
const offsetTops = contentItems.map((elem) => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  return [ofs - clh / 2, ofs + clh / 2];
});

let latestNavItem = navItems[0];

let timeoutId;

const onChangeNavItemActivated = (scrollTop) => {
  const foundOffsetTopIdx = offsetTops.findIndex(([from, to]) => from <= scrollTop && to > scrollTop);

  const currentNavItem = navItems[foundOffsetTopIdx];
  if (latestNavItem !== currentNavItem) {
    latestNavItem && latestNavItem.classList.remove('on');
    currentNavItem.classList.add('on');
    latestNavItem = currentNavItem;
  }
}

window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  // do something

  if (timeoutId >= 0) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => onChangeNavItemActivated(scrollTop), 50);
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

