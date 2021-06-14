import draw from './bubble.js';

const initialFrames = [5,6,7,8,10,8,7,6,5];
const frames = initialFrames;
let idx = -1;

function animate() {
  idx++
  if (idx < frames.length) {
    const wave = new draw(2, frames[idx++]);
    wave.drawWave();
  } else {
    idx = 0;
  }
  
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);