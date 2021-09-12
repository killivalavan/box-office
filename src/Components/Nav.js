import { useState } from "react";
import { fetchSearch } from "../Actions/searchAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <div>
      <form>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button onClick={submitHandler}>Search</button>
        <button className='clear' onClick={clearHandler}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Nav;
