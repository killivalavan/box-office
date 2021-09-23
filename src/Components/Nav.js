import { useState } from "react";
import { fetchSearch } from "../Actions/searchAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

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
      <h2>Box Office</h2>
      <form onSubmit={submitHandler}>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button className='clear'>
          <FontAwesomeIcon onClick={clearHandler} size='2x' icon={faTimes} />
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  margin: 0.6rem 10rem 4rem 2rem;
  h2 {
    flex-grow: 1;
    margin-left: 3rem;
  }
  form {
    flex-grow: 6;
    position: relative;
    input {
      width: 100%;
      padding: 0.4rem;
      border: none;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.8);

      &:focus {
        background: rgba(255, 255, 255, 0.9);
      }
    }
    .clear {
      cursor: pointer;
      position: absolute;
      right: 0;
      padding: 0.3rem 0.4rem;
      background: transparent;
      color: grey;
      transform: translateX(1px);
      font-size: 0.6rem;
    }
  }
`;

export default Nav;
