const getContext = () => {
  return document.querySelector('canvas').getContext('2d');
}

let colorRandom = () => {
  return Math.random() * 256; 
}

function sineCircleXYatAngle(cx, cy, radius, amplitude, angle, sineCount) {
  const x = cx + (radius + amplitude * Math.sin(sineCount * angle)) * Math.cos(angle) ;
  const y = cy + (radius + amplitude * Math.sin(sineCount * angle)) * Math.sin(angle);
  return ({
    x:x,
    y:y
  });
}

export {
  getContext,
  colorRandom,
  sineCircleXYatAngle
};