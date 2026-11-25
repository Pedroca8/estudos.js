/** @param {{context: CanvasRenderingContext2D, width: number, height: number }} props */

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ],
  animate: true
};
let posX = 0
const myimage = new Image(2000, 2000);
myimage.src = "./image/gato.jpg"


const sketch = () => {
  return ({ context, width, height, time }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const imgW = myimage.width;
    const imgH = myimage.height;

    const centerX = (width - imgW) / 2;
    const centerY = (height- imgH) / 2;


    context.filter = "red";
    context.drawImage(
      myimage,
      centerX + posX,
      centerY,
      imgW,
      imgH,
    )
  };
};

canvasSketch(sketch, settings);
