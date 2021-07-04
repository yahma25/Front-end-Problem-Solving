// Import stylesheets
import "./style.css";

// Write Javascript code here!

let latestClickedElement;

document.body.addEventListener('click', (e) => {
  if (e.target.contains(latestClickedElement)) {
    return;
  }

  if (latestClickedElement && latestClickedElement.parentNode.tagName === 'DETAILS') {
    latestClickedElement.parentElement.removeAttribute('open');
  }

  latestClickedElement = e.target;
});