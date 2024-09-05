
import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet our Dogs!</h1>
      {dogs.map(dog => (
        <div key={dog.name}>
          <h3>{dog.name}</h3>
          <img src={`/${dog.src}.jpg`} alt={dog.name} />
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>More about {dog.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
