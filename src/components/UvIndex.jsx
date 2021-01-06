import { useEffect, memo, useRef } from 'react';

const UvIndex = memo(function UvIndex({ uvIndex }) {
  const roundUvIndex = Math.round(uvIndex);
  const uv = useRef();

  useEffect(() => {
    const ctx = uv.current.getContext('2d');
    ctx.clearRect(0, 0, 213, 146);
  }, [uvIndex]);

  useEffect(() => {
    const ctx = uv.current.getContext('2d');

    const calc = (uvIndex * 12 * 3.14) / 180 - 3.14;

    ctx.beginPath();
    ctx.strokeStyle = '#FFB900';
    ctx.lineWidth = 25;
    ctx.arc(107, 145, 93, 3.14, calc.toFixed(2), false); //-3.14, 0
    ctx.stroke();
  }, [uvIndex]);

  return (
    <div className="highlight uv-index">
      <span className="uv-index-text">UV Index</span>
      <span className="uv-index-text-number-6 num">6</span>
      <span className="uv-index-text-number-9 num">9</span>
      <span className="uv-index-text-number-12 num">12</span>
      <div className="uv-index-scale">
        <canvas className="ellipse" ref={uv} />
        <span className="uv-index-scale-number">{roundUvIndex}</span>
      </div>
    </div>
  );
});

export default UvIndex;
