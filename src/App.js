import React, { Component } from "react";
import { apiKey } from "./auth";
import "./App.css";
import MoviesList from "./components/MoviesList";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieInfo from "./components/MovieInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: "",
      currentMovie: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.viewMovieInfo = this.viewMovieInfo.bind(this);
    this.closeMovieInfo = this.closeMovieInfo.bind(this);
    this.displaySearchArea = this.displaySearchArea.bind(this);
  }

  /* Festch data from API and populates the movies array in the state */
  handleSubmit(evt) {
    evt.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: [...data.results],
        });
      });
  }

  /* Handle the input field value change and passes it to state */
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  /* Open a separate view with the movie info and details */
  viewMovieInfo(id) {
    const filteredMovie = this.state.movies.filter((movie) => movie.id === id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({ currentMovie: newCurrentMovie });
  }

  /* Close the view with the movie info and details */
  closeMovieInfo() {
    this.setState({ currentMovie: null });
  }

  /* Display or hide the search input field depending on currentMovie */
  displaySearchArea() {
    if (this.state.currentMovie === null) {
      return (
        <React.Fragment>
          <Search
            submitForm={this.handleSubmit}
            searchValue={this.handleChange}
            inputValue={this.state.searchTerm}
          />
          <MoviesList
            movies={this.state.movies}
            viewMovieInfo={this.viewMovieInfo}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MovieInfo
            currentMovie={this.state.currentMovie}
            closeMovieInfo={this.closeMovieInfo}
          />
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="App">{this.displaySearchArea()}</div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
