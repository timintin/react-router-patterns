
import React from 'react';

function DogDetails({ dog }) {
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
