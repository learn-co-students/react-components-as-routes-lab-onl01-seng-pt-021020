import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((m) => 
        <div>
          <h3>{m.name}</h3>
          <p>Movies:</p>
          <ul>
            {m.movies.map((g) => 
            <li>{g}</li>
            )}
          </ul>
        </div>
        )}
    </div>
  );
};

export default Actors;
