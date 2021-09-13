import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Movie = ({ img, imdbID, title, year }) => {
  const onclickHandler = () => {
    console.log(imdbID);
  };

  return (
    <StyledMovie>
      <Link to={`/${imdbID}`}>
        <h2>
          {title} ({year})
        </h2>
        <img onClick={onclickHandler} src={img} alt='No poster found!' />
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled.div`
  margin-left: 1rem;
  h2 {
    font-size: 1rem;
    margin-left: 1rem;
    width: 60%;
  }
  img {
    object-fit: contain;
  }
`;

export default Movie;
