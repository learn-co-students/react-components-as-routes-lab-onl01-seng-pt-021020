import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor,i)=>{
        return (
        <div key={i} className='actor'>
          <p>{actor.name}</p>
          <p>{actor.movies}</p>
        </div>
      )})}
    </div>
  );
};

export default Actors;
