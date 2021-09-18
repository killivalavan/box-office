import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchDetail } from "../Actions/movieAction";
import { useDispatch } from "react-redux";

const Movie = ({ img, imdbID, title, year }) => {
  //Load Detail
  const dispatch = useDispatch();

  const LoadDetailHandler = () => {
    dispatch(fetchDetail(imdbID));
  };

  return (
    <>
      {img !== "N/A" ? (
        <StyledMovie onClick={LoadDetailHandler}>
          <Link to={`/${imdbID}`}>
            <h2>
              {title} ({year})
            </h2>
            <img src={img} alt='No poster found!' />
          </Link>
        </StyledMovie>
      ) : (
        ""
      )}
    </>
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
