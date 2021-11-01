import React, { Component } from "react";
import "./MovieInfo.css";
import poster from "../images/poster-unavailable.svg";

class MovieInfo extends Component {
  displayMovieInfo() {
    {
      return (
        <div className="MovieInfo-container">
          <div className="Movieinfo-box">
            <img
              className="MovieInfo-poster"
              src={`https://image.tmdb.org/t/p/w342/${this.props.currentMovie.poster_path}`}
              alt={`${this.props.title} Poster`}
              title={`${this.props.title}`}
            />
          </div>
          <div className="MovieInfo-details">
            <h3 className="MovieInfo-title">{this.props.currentMovie.title}</h3>
            <h4 className="MovieInfo-date">
              {this.props.currentMovie.release_date}
            </h4>
            <p className="MovieInfo-summary">
              {this.props.currentMovie.overview}
            </p>
            <p className="MovieInfo-rating">
              <span className="MovieInfo-rating-label">Average Vote: </span>
              {this.props.currentMovie.vote_average}
            </p>
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
