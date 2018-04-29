'use strict';

export default function () {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  return function(element) {
    const styles = window.getComputedStyle(element);

    const sizeBefore = parseInt(styles.fontSize);
    const { width: wrappedWidth } = element.getBoundingClientRect();
    
    ctx.font = styles.font;
    const { width: rawWidth }  = ctx.measureText(element.innerHTML);

    const sizeAfter = wrappedWidth / rawWidth * sizeBefore;
    element.style.setProperty('font-size', sizeAfter + 'px');
  }
};
