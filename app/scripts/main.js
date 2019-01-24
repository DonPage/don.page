/**
 * @function ready
 * @description document ready function.
 * @param {Function} fn - Function to execute when document is ready.
 * @return {VoidFunction}
 */
const ready = (fn) => {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/**
 * @function init
 * @description function to init all other js sub modules.
 * @return {VoidFunction}
 */
const init = () => {
  const canvas = document.getElementById('canvas');
  const input = document.getElementById('occupation');

  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  const paper = pen(canvas);

  canvas.addEventListener('mousedown', paper.actions.draw, false);
  canvas.addEventListener('mousemove', paper.actions.draw, false);
  canvas.addEventListener('mouseup', paper.actions.draw, false);
  document.addEventListener('mouseout', paper.actions.stop, false);

  occupation(input);
};

ready(init);

