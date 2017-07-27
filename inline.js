'use strict';

function inline(element) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  return function() {
    var styles = window.getComputedStyle(element);

    var sizeBefore = parseInt(styles.font.split(' ')[4]);
    var widthBefore = parseInt(styles.width);

    ctx.font = styles.font;
    var widthAfter = ctx.measureText(element.innerHTML).width;

    var sizeAfter = widthBefore / widthAfter * sizeBefore;
    element.style.setProperty('font-size', sizeAfter + 'px');
  }
}