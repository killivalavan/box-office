import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecent } from "../Actions/searchAction";
import Movie from "./Movie";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const Home = () => {
  const dispatch = useDispatch();
  const { popular, searched, cartoon, cartoon2 } = useSelector(
    (state) => state.Movie
  );

  useEffect(() => {
    dispatch(fetchRecent());
  }, []);

  // get loaction
  const location = useLocation();
  const pathId = location.pathname.split("/")[1];

  return (
    <>
      {/* {pathId && <MovieDetails pathID={pathId} />} */}
      {searched.length ? (
        <div>
          <h1>Searched results</h1>
          <StyledMovie>
            {searched.map((item) => (
              <Movie
                imdbID={item.imdbID}
                img={item.Poster}
                title={item.Title}
                year={item.Year}
                key={item.imdbID}
              />
            ))}
          </StyledMovie>
        </div>
      ) : (
        ""
      )}

      <h1>Popular series</h1>
      <StyledMovie>
        {popular.map((item) => (
          <Movie
            imdbID={item.imdbID}
            img={item.Poster}
            title={item.Title}
            year={item.Year}
            key={item.imdbID}
          />
        ))}
      </StyledMovie>

      <h1>Cartoon movie's</h1>
      <StyledMovie>
        {cartoon2.map((item) => (
          <Movie
            imdbID={item.imdbID}
            img={item.Poster}
            title={item.Title}
            year={item.Year}
            key={item.imdbID}
          />
        ))}
      </StyledMovie>

      <h1>Joseph Barbera</h1>
      <StyledMovie>
        {cartoon.map((item) => (
          <Movie
            imdbID={item.imdbID}
            img={item.Poster}
            title={item.Title}
            year={item.Year}
            key={item.imdbID}
          />
        ))}
      </StyledMovie>
    </>
  );
};

const StyledMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
`;

export default Home;
