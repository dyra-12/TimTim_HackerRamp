import React, { useState } from 'react';

const ImageTile = ({ src, alt, caption, className }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`image-tile ${className} ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <img src={src} alt={alt} />
      {selected && (
        <div className="tick-button">
          <span className="tick">✓</span>
        </div>
      )}
      {caption && <p>{caption}</p>}
    </div>
  );
};

export default ImageTile;
