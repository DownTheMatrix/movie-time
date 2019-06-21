import React, {Component} from "react";
import "./MovieInfo.css";

class MovieInfo extends Component {
    render() {
        return (
            <div className="MovieInfo">
                <div className="MovieInfo-btn-wrapper">
                    <button className="MovieInfo-btn" onClick={this.props.closeMovieInfo} >&larr; Go Back</button>
                </div>
            </div>
        );
    }
}

export default MovieInfo;