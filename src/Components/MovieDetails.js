import React from "react";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const { searched } = useSelector((state) => state.searched);

  return (
    <>
      <h2>Searched results</h2>
      {searched.Response === "True" ? (
        <div>
          <div className='poster'>
            <img src={searched.Poster} alt='no poster found!' />
          </div>
          <div className='content'>
            <h1>
              {searched.Title} ({searched.Year})
            </h1>
            <div className='list'>
              <ul>
                <li>{searched.Language}</li>
                <li>{searched.Released}</li>
                <li>{searched.Genre}</li>
                <li>{searched.Runtime}</li>
              </ul>
            </div>
            {searched.Ratings.length && (
              <p>IMDB Ratings: {searched.Ratings[0].Value}</p>
            )}
            <p>{searched.imdbVotes}</p>
            <div className='awards'> Awards: {searched.Awards}</div>
            {searched.Plot && (
              <div className='overview'>
                <h3>Overview</h3>
                <p>{searched.Plot}</p>
              </div>
            )}
            <div className='crew'>
              <div className='director'>
                <p>Director</p>
                <p>{searched.Director}</p>
              </div>
              <div className='Actors'>
                <p>Actors</p>
                <p>{searched.Actors}</p>
              </div>
              <div className='writer'>
                <p>Writer</p>
                <p>{searched.Writer}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>{searched.Error}</h2>
      )}
    </>
  );
};

export default MovieDetails;
