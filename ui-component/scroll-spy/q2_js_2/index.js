import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
const getOffsetTops = contentItems.map(item => item.offsetTop);

let latestNavItem = navItems[0];

window.addEventListener("scroll", e => {
  const scrollTop = e.target.scrollingElement.scrollTop;
  const foundNavItem = navItems[getOffsetTops.findIndex(offsetTop => offsetTop > scrollTop) - 1];

  if (latestNavItem !== foundNavItem) {
    latestNavItem.classList.remove('on');
    foundNavItem.classList.add('on');
    latestNavItem = foundNavItem;
  }
});

navElem.addEventListener("click", e => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }
});
