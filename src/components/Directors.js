import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, id)=>{
        return(
        <div key={id}>
          <h2>{director.name}</h2>
          <ul>
          {director.movies.map((movie, id)=>{
            return <li key={id}>{movie}</li>
          })}
          </ul>
        </div>)
      })}
    </div>
  );
}

export default Directors
