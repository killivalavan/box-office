//BAse url
const base_url = "https://www.omdbapi.com/";

//api key
const key = "b85f8d45";
const api_key = `apikey=${key}`;

//movieSearchURL
export const movieSearchURL = (search) => `${base_url}?s=${search}&${api_key}`;

// Recent Movies
export const popularMovieURL = () => `${base_url}?s=sherlock&${api_key}`;

// Cartoons
//Tom and jerry
export const cartoonsURL = () => `${base_url}?s=tom and jerry&${api_key}`;

//toy story
export const cartoons2URL = () => `${base_url}?s=Toy story&${api_key}`;

//netflix
export const netflixURL = () => `${base_url}?s=kissing booth&${api_key}`;

// GAme Details
export const movieDetails = (id) => `${base_url}?i=${id}&${api_key}`;
