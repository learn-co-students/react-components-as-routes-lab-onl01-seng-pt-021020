import React from 'react';
import { movies } from '../data';

const getMovies = () => {
  return (
    movies.map((movie, index) => {
      return (
        <div key={index}>
          <h2>{movie.title}</h2>
          <h4>{movie.time} minutes</h4>

          <ul>
            {movie.genres.map((genre, index) => {
              return (
                <li key={index}>{genre}</li>
              )
            })}
          </ul>

        </div>
      )
    })
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {getMovies()}
    </div>
  );
};

export default Movies;
