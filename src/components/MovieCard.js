import React, { Component } from "react";
import "./MovieCard.css";
import poster from "../images/poster-unavailable.svg";

class MovieCard extends Component {
  /* Display movie cards */
  displayMovieCards() {
    if (this.props.poster === null) {
      return (
        <figure className="MovieCard-box">
          <img
            className="MovieCard-poster"
            src={poster}
            alt="Poster Unavailable"
            title="Poster Unavailable"
          />
          <figcaption className="MovieCard-info">
            <h3 className="MovieCard-alt-heading">
              The movie poster and info are temporarily not available.
            </h3>
          </figcaption>
        </figure>
      );
    } else {
      return (
        <figure className="MovieCard-box">
          <img
            className="MovieCard-poster"
            src={`https://image.tmdb.org/t/p/w342/${this.props.poster}`}
            alt={`${this.props.title} Poster`}
            title={`${this.props.title}`}
          />
          <figcaption className="MovieCard-info">
            <h3 className="MovieCard-title">{this.props.title}</h3>
            <span className="MovieCard-date">{this.props.releaseDate}</span>
            <p className="MovieCard-summary">{this.props.overview}</p>
            <button
              className="MovieCard-btn"
              onClick={() => this.props.viewMovieInfo(this.props.movieId)}
            >
              Read More
            </button>
          </figcaption>
        </figure>
      );
    }
  }

  render() {
    return <div className="MovieCard">{this.displayMovieCards()}</div>;
  }
}

export default MovieCard;
