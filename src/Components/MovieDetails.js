import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import award from "../img/medal.png";
import vote from "../img/like.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const MovieDetails = ({ pathID }) => {
  const { movieDetails } = useSelector((state) => state.MovieDetail);

  //Rating
  const Count = () => {
    const rating = movieDetails.imdbRating.split(".")[0];
    return rating + "0";
  };

  //USeHistory
  const history = useHistory();

  //To select close icon
  const closeRef = useRef();

  //Close handler
  const closeHandler = () => {
    if (closeRef.current.className === "close") {
      history.push("/");
    }
  };

  return (
    <>
      <Details>
        <div ref={closeRef} onClick={closeHandler} className='close'>
          <FontAwesomeIcon size='3x' icon={faTimes} />
        </div>

        {movieDetails.Response === "True" ? (
          <Card>
            <Poster>
              <img src={movieDetails.Poster} alt='No poster found!' />
            </Poster>
            <Content>
              <h1>
                {movieDetails.Title}
                <span> ({movieDetails.Year})</span>
              </h1>
              <List>
                <ul>
                  <li>{movieDetails.Language}</li>
                  <li>{movieDetails.Released}</li>
                  <li>{movieDetails.Genre}</li>
                  <li>{movieDetails.Runtime}</li>
                </ul>
              </List>
              {movieDetails.Ratings.length && (
                <Ratings>
                  <p className='percentage'>{Count()}</p>
                  <div className='imdb'>
                    <CircularProgress
                      className='progress'
                      variant='determinate'
                      color='secondary'
                      thickness={5}
                      value={parseInt(
                        movieDetails.imdbRating.split(".")[0] + "0"
                      )}
                    />
                    <span>
                      IMDB
                      <br /> Score %
                    </span>
                  </div>
                </Ratings>
              )}
              <Vote>
                <p>
                  <img src={vote} alt='' />
                  {movieDetails.imdbVotes}
                </p>
              </Vote>
              <Awards>
                <p>
                  <img src={award} alt='' />
                  {movieDetails.Awards}
                </p>
              </Awards>
              {movieDetails.Plot && (
                <Overview>
                  <h3>Overview</h3>
                  <p>{movieDetails.Plot}</p>
                </Overview>
              )}
              <Crew>
                <div className='director'>
                  <h3>Director</h3>
                  <p>{movieDetails.Director}</p>
                </div>
                <div className='Actors'>
                  <h3>Actors</h3>
                  <p>{movieDetails.Actors}</p>
                </div>
                <div className='writer'>
                  <h3>Writer</h3>
                  <p>{movieDetails.Writer}</p>
                </div>
              </Crew>
              <button className='Trailer'>
                <FontAwesomeIcon className='play' icon={faPlay} />
                Trailer
              </button>
            </Content>
          </Card>
        ) : (
          <h2>{movieDetails.Error}</h2>
        )}
      </Details>
    </>
  );
};

const Details = styled.div`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgb(0, 0, 0);
  overflow-y: scroll;

  .close {
    width: 4rem;
    position: absolute;
    right: 0;
    top: 2%;
    transform: translate(-2px, -2px);
    color: #a8a8a8;
    transition: all 0.5s ease;
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
`;

const Card = styled.div`
  width: 90%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 7rem;
`;

const Poster = styled.div`
  img {
    border-radius: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 3rem;
  h1 {
    /* margin-top: 2rem; */
    span {
      color: #a9a9a9;
      transition: all 0.2s ease;
      &:hover {
        color: #ffff;
      }
    }
  }
  button {
    width: 10rem;
    padding: 0.5rem 1.5rem;
    margin-top: 2rem;
    background: transparent;
    color: white;
    cursor: pointer;
    border: 3px solid #f50057;
    font-size: 1rem;
    font-weight: bold;
    .play {
      margin-right: 0.6rem;
      color: #f50057;
      &:hover {
        color: #a9a9a9;
      }
    }
  }
`;

const Ratings = styled.div`
  display: flex;
  margin: 1rem 0rem;
  position: relative;
  .percentage {
    position: absolute;
    top: 25%;
    left: 1.5%;
    /* transform: translate(2.5px, 25px); */
  }
  .imdb {
    display: flex;
    align-items: center;
  }
  span {
    padding-left: 1rem;
  }
`;

const Vote = styled.div`
  margin: 0.5rem 0rem;
  p {
    display: flex;
  }
  img {
    width: 1.2rem;
    margin-right: 0.3rem;
  }
`;

const Awards = styled.div`
  margin: 0.5rem 0rem;
  img {
    width: 1.3rem;
    margin-right: 0.3rem;
  }
  p {
    width: 80%;
    display: flex;
    align-items: center;
  }
`;

const List = styled.div`
  ul {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }
  li:first-child {
    list-style: none;
  }
`;

const Overview = styled.div`
  margin-top: 1.5rem;
  width: 80%;
`;

const Crew = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  gap: 2rem;
  justify-content: space-between;
`;

export default MovieDetails;
