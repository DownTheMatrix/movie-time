import React, { Component } from "react";
import { apiKey } from "./auth";
import "./App.css";
import MoviesList from "./MoviesList";
import Search from "./Search";
import Navbar from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /* Festches data from API and populates the movies array in the state */
  handleSubmit(evt) {
    evt.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${
        this.state.searchTerm
      }`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: [...data.results]
        });
        console.log(this.state.movies);
      });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="App">
          <Search
            submitForm={this.handleSubmit}
            searchValue={this.handleChange}
            inputValue={this.state.searchTerm}
          />
          <MoviesList movies={this.state.movies} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
