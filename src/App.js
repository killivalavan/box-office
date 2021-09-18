import Nav from "./Components/Nav";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";
import { Route } from "react-router-dom";
import GlobalStyle from "./Components/GlobalStyle";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <h2>IMDB</h2>
      <Nav />
      <Route path='/:id'>
        <MovieDetails />
      </Route>
      <Home />
    </div>
  );
}

export default App;
