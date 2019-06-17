import React, { Component } from "react";
import "./MovieCard.css";
import poster from "./images/poster-unavailable.svg";

class MovieCard extends Component {
  render() {

    const formattedDate = this.props.releaseDate.slice(0, 4);  // Only get the year

    return (
      <div className="MovieCard">
        {
          this.props.poster === null ? (
            <figure className="MovieCard-box">
              <img 
                className="MovieCard-poster"
                src={poster} 
                alt="Poster Unavailable" 
                title="Poster Unavailable" />
            </figure>
        ) : (
            <figure className="MovieCard-box">
              <img
                className="MovieCard-poster"
                src={`https://image.tmdb.org/t/p/w342/${this.props.poster}`}
                alt={`${this.props.title} Poster`}
                title={`${this.props.title}`}
            />
            <figcaption className="MovieCard-info">
              <h3 className="MovieCard-title">{this.props.title}</h3>
              <span className="MovieCard-date">({formattedDate})</span>
              <p className="MovieCard-summary">{this.props.overview}</p>
              <a href="#" className="MovieCard-btn">Read More</a>
          </figcaption>
          </figure>
          )
        }
      </div>
    );
  }
}

export default MovieCard;
