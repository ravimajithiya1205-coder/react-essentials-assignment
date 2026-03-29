import React from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie, toggleFav, isFav, dark }) => {
  return (
    <div className="col-md-4">

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="card border-0 shadow-lg h-100"
      >
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x400"
          }
          className="card-img-top"
          alt={movie.title}
        />

        <div className="card-body text-center">
          <h5>{movie.title}</h5>

          <button
            className={`btn ${dark ? "btn-outline-light" : "btn-outline-dark"} ${isFav ? "btn-danger btntxt-hover-dark text-white" : ""}`}
            onClick={() => toggleFav(movie)}
          >
            {isFav ? "❤️ Remove" : "🤍 Favourite"}
          </button>
        </div>

      </motion.div>

    </div>
  );
};

export default MovieCard;