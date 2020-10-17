import React from 'react';
import { move } from 'superagent';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie, id)=>{
         return ( 
          <div key={id}>
            <h2>{movie.title}</h2>
            <ul>
              <li>{movie.time}</li>
            </ul>
            <ul>
            {movie.genres.map((genre, id)=>{
              return (<li key={id}>{genre}</li>)
            })}
            </ul>            
          </div>)
        })}
    </div>
  );
};

export default Movies;
