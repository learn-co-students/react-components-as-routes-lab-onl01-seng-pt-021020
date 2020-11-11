import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => {
        return (
          <div key={idx}>
            <h3>Name: {actor.name}</h3>
            <ul>
              <li key={actor.name}>Movies: {actor.movies}</li>
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;