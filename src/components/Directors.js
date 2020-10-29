import React from 'react';
import { directors } from '../data';

const getDirectors = () => {
  return (
    directors.map((director, index) => {
      return (
        <div key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => {
              return (
                <li key={index}>{movie}</li>
              )
            })}
          </ul>
        </div>
      )
    })
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {getDirectors()}
    </div>
  );
}

export default Directors
