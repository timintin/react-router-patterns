
import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory</h1>
      <Link to="/colors/new">Add a color</Link>
      <div>
        {colors.map(color => (
          <div key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorList;
