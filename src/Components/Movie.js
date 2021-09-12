import React from "react";
import styled from "styled-components";

const Movie = ({ img, imdbID, title, year }) => {
  const onclickHandler = () => {
    console.log(imdbID);
  };

  return (
    <Mov>
      <h2>
        {title} ({year})
      </h2>
      <img onClick={onclickHandler} src={img} alt='No poster found!' />
    </Mov>
  );
};

const Mov = styled.div`
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
