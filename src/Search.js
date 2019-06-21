import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <form
          action="#"
          className="Search-form"
          onSubmit={this.props.submitForm}
        >
          <label htmlFor="search">Search in the database</label>
          <input
            type="text"
            name="searchTerm" /* Must have the same name as the value in App state */
            id="search"
            placeholder="Search a movie"
            value={this.props.inputValue}
            onChange={this.props.searchValue}
          />
          {/* <button className="Search-filter">Filter Content</button> */}
        </form>
      </div>
    );
  }
}

export default Search;
