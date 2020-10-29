import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((m) => 
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
}

export default Directors
