import React from 'react';


const MovieList = (props) => {
  return (
     <>
      {props.movies.map((movie, index)=> (
        <div className='image-container d-flex justify-content-start m-3'>
  					<img src={movie.Poster} alt='movie'></img>
            <div className="overlay d-flex align-items-center justify-content-center"><ul>
              <li><b>Title: </b>{movie.Title}</li>
              <li><b>Year: </b>{movie.Year}</li>
              <li><b>Genre: </b>{movie.Genre}</li>
              <li><b>Plot: </b>{movie.Plot}</li>
              <li><a href={"https://www.imdb.com/title/" + movie.imdbID}>See more</a></li>
            </ul>
            </div>
  				</div>

  			))}
  		</>
  	);
  };

  export default MovieList;
