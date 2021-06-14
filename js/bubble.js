import { getContext,colorRandom, sineCircleXYatAngle} from './util.js';

const cx = canvas.width / 2;
const cy = canvas.height / 2;
const radius = 110;

const color = `rgb(${colorRandom()}, ${colorRandom()}, ${colorRandom()})`;

class draw {
  constructor(amp, sineCount, angle) {
    this.amp = amp;
    this.sineCount = sineCount;
    this.angle = angle;
  }

  drawWave(){
    const ctx = getContext();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    ctx.beginPath();
    
    for (let i = 0; i < 360; i++) {
      this.angle = i * Math.PI / 180;
      const pt = sineCircleXYatAngle(cx,cy,radius,this.amp,this.angle,this.sineCount);
      ctx.lineTo(
        pt.x,
        pt.y
      );
    }
      
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.fillStyle = '#ffff';
    ctx.strokeStyle = color;
    
  }
}

export default draw