import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director,i)=>{
        return (
        <div key={i} className='director'>
          <p>{director.name}</p>
          <p>{director.movies}</p>
        </div>
      )})}
    </div>
  );
}

export default Directors
