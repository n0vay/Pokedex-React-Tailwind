import React, { useState, useEffect } from "react";

const RotatingSprite = () => {
  const sprites = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
  ];

  const [spriteIndex, setSpriteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpriteIndex((prevIndex) => (prevIndex + 1) % sprites.length);
    }, 1500); // Change sprite every 2 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sprite-container">
      <img
        src={sprites[spriteIndex]}
        alt="Rotating Sprite"
        className="sprite"
      />
    </div>
  );
};

export default RotatingSprite;
