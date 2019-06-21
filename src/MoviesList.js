import React, { Component } from "react";
import "./MoviesList.css";
import MovieCard from "./MovieCard";

class MoviesList extends Component {
    render() {
        const movies = this.props.movies.map(movie => {
            return (
                <MovieCard 
                    key={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    voteAverage={movie.vote_average}
                    originalLanguage={movie.original_language}
                    appropriateness={movie.adult} /* Boolean */
                    viewMovieInfo={this.props.viewMovieInfo}
                    movieId={movie.id}
                />
            );
        });

        return (
            <div className="MoviesList">
                {movies}
            </div>
        );
    }
}

export default MoviesList;