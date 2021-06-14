import draw from './modules/bubble.js';

const frames = [5,6,7,8,10,8,7,6,5];
let idx = -1;

function animate() {
  idx++
  if (idx < frames.length) {
    const wave = new draw(2, frames[idx++]);
    wave.drawBubble();
  } else {
    idx = 0;
  }
  
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);