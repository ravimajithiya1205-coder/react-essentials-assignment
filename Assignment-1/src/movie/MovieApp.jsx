import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_KEY;


const MovieApp = ({dark}) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [fav, setFav] = useState([]);

  // 🔥 LOAD TRENDING MOVIES ON START
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.results || []);

      });
  }, []);

  // 🔍 SEARCH MOVIES
  useEffect(() => {
    if (search === "") return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.results || []);
      });
  }, [search]);

  const toggleFav = (movie) => {
    if (fav.find(f => f.id === movie.id)) {
      setFav(fav.filter(f => f.id !== movie.id));
    } else {
      setFav([...fav, movie]);
    }
  };

  return (
    <div id="movies" className="container-fluid">

      <h2 className="text-center mb-4 fw-bold">🔥 Trending Movies</h2>

      <div className="input-group mb-4">
        <input
          className="form-control"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={`btn ${dark ? "btn-secondary" : "btn-dark"}`} onClick={() => setSearch("")}>
          Reset
        </button>
      </div>

      <div className="row g-4">
        {movies.map(movie => (
          <MovieCard
          dark={dark}
            key={movie.id}
            movie={movie}
            toggleFav={toggleFav}
            isFav={fav.some(f => f.id === movie.id)}
          />
        ))}
      </div>

      <hr />

      <h3>⭐ Favourite Movies</h3>

      <div className="row g-4">
        {fav.length === 0 ? (
          <p>No favourites yet</p>
        ) : (
          fav.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleFav={toggleFav}
              isFav={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieApp;