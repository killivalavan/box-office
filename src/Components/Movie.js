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
      <Image>
        {img !== "N/A" ? (
          <StyledMovie onClick={LoadDetailHandler}>
            <Link to={`/${imdbID}`}>
              <h3>
                {title} ({year})
              </h3>
              <img src={img} alt='No poster found!' />
            </Link>
          </StyledMovie>
        ) : (
          ""
        )}
      </Image>
    </>
  );
};

const Image = styled.div``;

const StyledMovie = styled.div`
  margin-right: 1.5rem;
  h3 {
    font-size: 1rem;
    margin: 2rem 0rem 1.5rem 0rem;
    width: 60%;
  }
  img {
    object-fit: contain;
  }
`;

export default Movie;
