import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, idx) => {
          return (
          <div key={idx}>
            <h3>Title: {movie.title}</h3>
            <h3>Time: {movie.time}</h3>
              <ul>
                <li key={movie.title}>Genre: {movie.genres}</li>
              </ul>
          </div>
          )
        })}
    </div>
  );
};

export default Movies;
