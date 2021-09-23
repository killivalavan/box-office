import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecent } from "../Actions/searchAction";
import Movie from "./Movie";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { popular, searched, cartoon, cartoon2, kissingBooth } = useSelector(
    (state) => state.Movie
  );

  useEffect(() => {
    dispatch(fetchRecent());
  }, []);

  // get loaction
  const location = useLocation();
  const pathId = location.pathname.split("/")[1];

  return (
    <Title>
      {searched.length ? (
        <div>
          <h2>Searched results</h2>
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

      <h2>Popular series</h2>
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

      <h2>Netflix</h2>
      <StyledMovie>
        {kissingBooth.map((item) => (
          <Movie
            imdbID={item.imdbID}
            img={item.Poster}
            title={item.Title}
            year={item.Year}
            key={item.imdbID}
          />
        ))}
      </StyledMovie>

      <h2>Cartoon movie's</h2>
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

      <h2>Joseph Barbera</h2>
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
    </Title>
  );
};

const Title = styled.div`
  margin-left: 5rem;
  h2 {
    margin: 4rem 0rem 0rem 0rem;
    text-decoration: underline;
  }
`;

const StyledMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
`;

export default Home;
