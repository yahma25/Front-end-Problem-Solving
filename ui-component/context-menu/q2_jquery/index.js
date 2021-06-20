// Import stylesheets
import "./style.css";
import $ from "jquery";

// Write JQuery code here!
const $wrapper = $('.wrapper');
$wrapper.on('click', '.item', function(e) {
  e.stopPropagation();

  $(this).toggleClass('open').siblings().removeClass('open');
});

const $items = $wrapper.find('.item');

$(document).on('click', function() {
  $items.removeClass('open');
});
