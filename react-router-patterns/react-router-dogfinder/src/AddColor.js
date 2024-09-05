
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddColor({ addColor }) {
  const [name, setName] = useState('');
  const [hex, setHex] = useState('#ffffff');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name, hex });
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="hex">Color Value:</label>
        <input 
          type="color" 
          id="hex" 
          value={hex} 
          onChange={(e) => setHex(e.target.value)} 
        />
      </div>
      <button type="submit">Add Color</button>
    </form>
  );
}

export default AddColor;
