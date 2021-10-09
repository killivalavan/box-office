import { useState } from "react";
import { fetchSearch } from "../Actions/searchAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import icon from "../img/icon.png";
import { Tooltip } from "@mui/material";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const { pathname } = useLocation();

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
  };

  const clearHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_SEARCHED" });
    setTextInput("");
  };

  return (
    <StyledNav>
      <div onClick={clearHandler} className='title'>
        <img src={icon} alt='' />
        <h2>
          <span>B</span>ox Office
        </h2>
      </div>
      {pathname === "/" && (
        <form onSubmit={submitHandler}>
          <input
            value={textInput}
            onChange={inputHandler}
            type='text'
            placeholder='Movies, Series, Episode...'
          />
          <Tooltip title='Close' arrow>
            <button className='clear'>
              <FontAwesomeIcon
                onClick={clearHandler}
                size='2x'
                icon={faTimes}
              />
            </button>
          </Tooltip>
        </form>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  margin: 0.6rem 10rem 2rem 2rem;
  .title {
    flex-grow: 1;
    margin-left: 3rem;
    display: flex;
    cursor: pointer;
    h2 {
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

  form {
    flex-grow: 6;
    position: relative;
    input {
      width: 100%;
      padding: 0.5rem 0.5rem;
      border: none;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
      outline: none;
      &:focus {
        background: rgb(255, 255, 255);
      }
    }
    .clear {
      cursor: pointer;
      position: absolute;
      right: 0;
      padding: 0.5rem 0.6rem;
      background: transparent;
      color: grey;
      transform: translateX(1px);
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 735px) {
    width: 90%;
    margin: 1rem auto;
    h2 {
      display: none;
    }
    .title {
      margin-left: 1rem;
    }
  }
`;

export default Nav;
