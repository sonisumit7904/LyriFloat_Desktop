import React, { useEffect, useState } from 'react';

const MusicVisualizer = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initialize bars with random heights
    const initialBars = Array.from({ length: 50 }, () => Math.random() * 100);
    setBars(initialBars);

    // Animate bars
    const interval = setInterval(() => {
      setBars(prevBars => 
        prevBars.map(() => Math.random() * 100 + 10)
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-blue-400/10" />
      
      {/* Animated Bars */}
      <div className="absolute inset-0 flex items-end justify-center space-x-1">
        {bars.map((height, index) => (
          <div
            key={index}
            className="bg-gradient-to-t from-green-400 to-blue-400 w-2 transition-all duration-150 ease-out"
            style={{
              height: `${height}%`,
              animationDelay: `${index * 50}ms`
            }}
          />
        ))}
      </div>
      
      {/* Floating Musical Notes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-2xl animate-float opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`
            }}
          >
            {i % 3 === 0 ? '♪' : i % 3 === 1 ? '♫' : '♬'}
          </div>
        ))}
      </div>
      
      {/* Pulsing Circles */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-green-400/20 animate-ping"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicVisualizer;