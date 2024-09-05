
import React from 'react';
import { useParams } from 'react-router-dom';

function ColorDetails({ colors }) {
  const { colorName } = useParams();
  const color = colors.find(c => c.name.toLowerCase() === colorName.toLowerCase());

  if (!color) return <h1>Color not found!</h1>;

  return (
    <div>
      <h1>{color.name}</h1>
      <div style={{ backgroundColor: color.hex, height: '100px', width: '100px' }}></div>
      <p>{color.hex}</p>
    </div>
  );
}

export default ColorDetails;
