import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecent } from "../Actions/searchAction";
import Movie from "./Movie";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import image from "../img/notFound.svg";

const Home = () => {
  const dispatch = useDispatch();
  const { popular, searched, cartoon, cartoon2, kissingBooth, harryPotter } =
    useSelector((state) => state.Movie);

  useEffect(() => {
    dispatch(fetchRecent());
  }, []);

  // get loaction
  const location = useLocation();
  //const pathId = location.pathname.split("/")[1];

  //To  hide Scroll
  if (location.pathname !== "/") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  //console.log(searched.data.Search);
  return (
    <Title>
      {searched ? (
        <div>
          {searched.length ? <h2>Searched results</h2> : ""}
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
        <NotFound>
          <img src={image} alt='' />
          <h1>Whoops! We couldn't find what you're looking for...</h1>
        </NotFound>
      )}

      {cartoon.length ? <h2>Disney flim's</h2> : ""}
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

      {popular.length ? <h2>Mystery serie's</h2> : ""}
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

      {harryPotter.length ? <h2>Fantasy Novel's</h2> : ""}
      <StyledMovie>
        {harryPotter.map((item) => (
          <Movie
            imdbID={item.imdbID}
            img={item.Poster}
            title={item.Title}
            year={item.Year}
            key={item.imdbID}
          />
        ))}
      </StyledMovie>

      {kissingBooth.length ? <h2>Netflix</h2> : ""}
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

      {cartoon2.length ? <h2>Joseph Barbera</h2> : ""}
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
  width: 90%;
  margin: auto;
  h2 {
    margin: 3rem 0rem 0rem 1rem;
    color: #f50057;
    font-size: 2rem;
    font-weight: normal;
  }
  @media screen and (max-width: 735px) {
    width: 95%;
    margin: auto;
  }
`;

const StyledMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 735px) {
    justify-content: space-evenly;
  }
`;

const NotFound = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 10rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 735px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default Home;
