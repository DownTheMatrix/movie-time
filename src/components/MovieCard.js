import React, { Component } from "react";
import "./MovieCard.css";

class MovieCard extends Component {
  /* Display movie cards */
  displayMovieCards() {
    return (
      this.props.poster && (
        <figure className="movieCard-box">
          <img
            className="MovieCard-poster"
            src={`https://image.tmdb.org/t/p/w342/${this.props.poster}`}
            alt={`${this.props.title} Poster`}
            title={this.props.title}
          />
          <figcaption className="MovieCard-info">
            <h3 className="MovieCard-title">{this.props.title}</h3>
            <span className="MovieCard-date">{this.props.releaseDate}</span>
            {this.props.overview.length ? (
              <p className="MovieCard-summary">{this.props.overview}</p>
            ) : (
              <p className="MovieCard-summary">
                The movie summary is not available.
              </p>
            )}
            <button
              className="MovieCard-btn"
              onClick={() => this.props.viewMovieInfo(this.props.movieId)}
            >
              Read More
            </button>
          </figcaption>
        </figure>
      )
    );
  }

  render() {
    /* return <div className="MovieCard">{this.displayMovieCards()}</div>; */
    {
      return this.props.poster ?  (
       <div className="MovieCard">{this.displayMovieCards()}</div>
      ) : (
        <div className="MovieCard-hidden"></div>
      );
    }
  }
}

export default MovieCard;
