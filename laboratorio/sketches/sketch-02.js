const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true //<-- seu desenho tem animação
};

const sketch = () => {
  return ({ context, width, height, time }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black" //<-- color
    //(x,y movimento)
    const x = width * 0.5;
    const y = height * 0.5;
    //(w,h tamanho)
    const w = width * 0.3;
    const h = height * 0.3;

    context.save(); // <-- isso tipo uma abertura do codigo
    context.translate(x, y)
    context.rotate(time)

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5 , w, h)
    context.fill();
    context.restore();// <-- essa e o fechamento do codigo

  };
};

canvasSketch(sketch, settings);

