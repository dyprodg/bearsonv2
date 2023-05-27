// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";

const GrainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    function draw() {
        var imageData = ctx.createImageData(canvas.width, canvas.height);
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
          var grain = Math.random() * 255;
          data[i] = grain;
          data[i + 1] = grain;
          data[i + 2] = grain;
          data[i + 3] = 10; // Reduziert die Deckkraft der Körner
        }
        ctx.putImageData(imageData, 0, 0);
        requestAnimationFrame(draw);
      }
      

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas id="grain" ref={canvasRef} style={{position: 'fixed', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999}} />
  );
};

export default GrainEffect;
