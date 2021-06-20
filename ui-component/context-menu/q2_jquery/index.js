// Import stylesheets
import "./style.css";
import $ from "jquery";

// Write JQuery code here!
let $latestClickedElem = null;

$(document).on('click', function () {
  $latestClickedElem?.removeClass('open');
  $latestClickedElem = null;
});

const $wrapper = $('.wrapper');
$wrapper.on('click', '.item', function(e) {
  e.stopPropagation();

  $latestClickedElem?.removeClass('open');

  if ($(this)?.get(0) !== $latestClickedElem?.get(0)) {
    $(this).addClass('open');
  }

  $latestClickedElem = $(this);
});

// const $wrapper = $('.wrapper');
// $wrapper.on('click', '.item', function(e) {
//   e.stopPropagation();
//
//   $(this).toggleClass('open').siblings().removeClass('open');
// });
//
// const $items = $wrapper.find('.item');
//
// $(document).on('click', function() {
//   $items.removeClass('open');
// });
