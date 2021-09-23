import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchDetail } from "../Actions/movieAction";
import { useDispatch, useSelector } from "react-redux";

const Movie = ({ img, imdbID, title, year }) => {
  //Load Detail
  const dispatch = useDispatch();

  const LoadDetailHandler = () => {
    dispatch(fetchDetail(imdbID));
  };

  return (
    <Image>
      {img !== "N/A" ? (
        <StyledMovie onClick={LoadDetailHandler}>
          <Link to={`/${imdbID}`}>
            <p>
              {title} ({year})
            </p>
            <img src={img} alt='No poster found!' />
          </Link>
        </StyledMovie>
      ) : (
        ""
      )}
    </Image>
  );
};

const Image = styled.div``;

const StyledMovie = styled.div`
  margin: 0rem 1.3rem;
  p {
    font-size: 1rem;
    font-weight: 600;
    margin: 2rem 0rem 1.5rem 0rem;
    width: 60%;
  }
  img {
    display: block;
    object-fit: contain;
    border-radius: 5px;
  }
`;

export default Movie;
