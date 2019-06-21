import React, { Component } from "react";
import "./MovieInfo.css";
import poster from "./images/poster-unavailable.svg";

class MovieInfo extends Component {
  displayMovieInfo() {
    if (this.props.poster === null) {
      return (
        <div className="MovieInfo-container">
          <figure className="MovieInfo-box">
            <img
              className="MovieInfo-poster"
              src={poster}
              alt="Poster Unavailable"
              title="Poster Unavailable"
            />
            <figcaption className="MovieInfo-details">
              <h3 className="MovieInfo-alt-title">
                The movie poster and info are temporarily not available.
              </h3>
            </figcaption>
          </figure>
        </div>
      );
    } else {
      return (
        <div className="MovieInfo-container">
          <div className="Movieinfo-box">
            <img
              className="MovieInfo-poster"
              src={`https://image.tmdb.org/t/p/w342/${
                this.props.currentMovie.poster_path
              }`}
              alt={`${this.props.title} Poster`}
              title={`${this.props.title}`}
            />
            </div>
            <div className="MovieInfo-details">
              <h3 className="MovieInfo-title">{this.props.currentMovie.title}</h3>
              <h4 className="MovieInfo-date">{this.props.currentMovie.release_date}</h4>
              <p className="MovieInfo-summary">{this.props.currentMovie.overview}</p>
            </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="MovieInfo">
        <div className="MovieInfo-btn-wrapper">
          <button className="MovieInfo-btn" onClick={this.props.closeMovieInfo}>
            &larr; Go Back
          </button>
        </div>
        {this.displayMovieInfo()}
      </div>
    );
  }
}

export default MovieInfo;
