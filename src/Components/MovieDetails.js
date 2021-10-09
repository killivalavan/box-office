import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import award from "../img/medal.png";
import vote from "../img/like.png";
import close from "../img/close.svg";
import icon from "../img/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
//Counter npm
import CountUp from "react-countup";

const MovieDetails = () => {
  const { movieDetails, isLoading } = useSelector((state) => state.MovieDetail);

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
      {!isLoading && (
        <Details>
          <div className='title'>
            <img src={icon} alt='' />
            <h2 onClick={closeHandler}>
              <span>B</span>ox Office
            </h2>
          </div>
          <div ref={closeRef} onClick={closeHandler} className='close'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
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
                    {/* <CountUp end={1456} duration={5} /> */}
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
                <a
                  href='https://www.youtube.com/'
                  target='_blank'
                  className='Trailer'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon className='play' icon={faPlay} />
                  Trailer
                </a>
              </Content>
            </Card>
          ) : (
            <h2>{movieDetails.Error}</h2>
          )}
        </Details>
      )}
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
  .title {
    margin-left: 5rem;
    margin-top: 0.5rem;
    display: flex;
    h2 {
      cursor: pointer;
      font-weight: 200;
      font-size: 1.3rem;
      font-family: "Pacifico", cursive;
      span {
        color: #f50057;
        font-family: "Pacifico", cursive;
      }
    }
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.6rem;
    }
  }

  .close {
    width: 3rem;
    position: absolute;
    right: 5%;
    top: 10%;
    transform: translate(-2px, -2px);
    color: #a8a8a8;
    transition: all 0.5s ease;
    &:hover {
      color: white;
      cursor: pointer;
    }
    img {
      color: white;
    }
  }
  @media screen and (max-width: 735px) {
    margin-bottom: 4rem;
    .title {
      margin: 1rem 2rem;
    }
    .close {
      width: 2rem;
      transform: translate(-10px, -20px);
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
  @media screen and (max-width: 735px) {
    margin: 1rem;
  }
`;

const Poster = styled.div`
  img {
    border-radius: 10px;
  }
  @media screen and (max-width: 735px) {
    img {
      width: 12rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 3rem;
  padding-bottom: 5rem;
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
  a {
    width: 10rem;
    padding: 0.5rem 1.5rem;
    margin-top: 2rem;
    background: transparent;
    text-align: center;
    color: white;
    cursor: pointer;
    border: 3px solid #f50057;
    font-size: 1rem;
    font-weight: bold;
    .play {
      margin-right: 0.9rem;
      color: #f50057;
    }
    &:hover {
      .play {
        color: #a9a9a9;
      }
    }
  }
  @media screen and (max-width: 735px) {
    margin: 1.5rem auto;
    width: 95%;
    h1 {
      font-size: 1.5rem;
    }
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
  @media screen and (max-width: 735px) {
    ul {
      gap: 1rem;
      font-size: 0.8rem;
    }
  }
`;

const Ratings = styled.div`
  display: flex;
  margin: 1rem 0rem;
  position: relative;
  .percentage {
    position: absolute;
    transform: translate(13px, 10px);
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
  margin: 0.8rem 0rem;
  p {
    display: flex;
  }
  img {
    width: 1.2rem;
    margin-right: 0.3rem;
  }
`;

const Awards = styled.div`
  margin: 0.8rem 0rem;
  img {
    width: 1.3rem;
    margin-right: 0.3rem;
  }
  p {
    width: 80%;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 735px) {
    p {
      width: 100%;
    }
  }
`;

const Overview = styled.div`
  margin-top: 0.8rem;
  width: 80%;
  @media screen and (max-width: 735px) {
    width: 100%;
  }
`;

const Crew = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  gap: 2rem;
  justify-content: space-between;
`;

export default MovieDetails;
