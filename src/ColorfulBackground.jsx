import React, { useState, useEffect } from 'react';

const ColorfulBackground = () => {
  const [currentGradient, setCurrentGradient] = useState(0);
  const [nextGradient, setNextGradient] = useState(1);
  const [opacity, setOpacity] = useState(1);

  const gradients = [
    'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    'linear-gradient(45deg, #a8e6cf, #dcedc8)',
    'linear-gradient(45deg, #ffd93d, #6bcf7f)',
    'linear-gradient(45deg, #4facfe, #00f2fe)',
    'linear-gradient(45deg, #43e97b, #38f9d7)',
    'linear-gradient(45deg, #fa709a, #fee140)',
    'linear-gradient(45deg, #a8edea, #fed6e3)',
    'linear-gradient(45deg, #ff9a9e, #fecfef)',
    'linear-gradient(45deg, #667eea, #764ba2)',
    'linear-gradient(45deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #91a7ff 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fading out
      setOpacity(0);
      
      // After fade out completes, switch gradients and fade back in
      setTimeout(() => {
        setCurrentGradient(nextGradient);
        setNextGradient((nextGradient + 1) % gradients.length);
        setOpacity(1);
      }, 1000); // Half of transition duration
      
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, [nextGradient, gradients.length]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      {/* Background layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: gradients[nextGradient],
        }}
      />
      
      {/* Foreground layer with opacity transition */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: gradients[currentGradient],
          opacity: opacity,
          transition: 'opacity 2s ease-in-out',
        }}
      />
    </div>
  );
};

export default ColorfulBackground;
