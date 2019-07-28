import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div >
    <h1>Movies Page</h1>
    {movies.map(movie => <div className="movie">{movie.title} {movie.time} <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul></div>)}
    
    </div>
  );
};

export default Movies;


// {
//   title: 'Jack Reacher: Never Go Back',
//   time: 118,
//   genres: ['Action', 'Adventure', 'Crime', 'Mystery', 'Thriller']
// }