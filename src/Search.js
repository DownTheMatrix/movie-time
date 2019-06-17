import React, {Component} from "react";
import "./Search.css";

class Search extends Component {
    render() {
        return (
            <div className="Search">
                <form action="#" className="Search-form" onSubmit={this.props.submitForm}>
                    <label htmlFor="search">Search in the database</label>
                    <input 
                        type="text" 
                        name="searchTerm" 
                        id="search" 
                        placeholder="Search a movie"
                        value={this.props.inputValue}
                        onChange={this.props.searchValue}
                    />
                </form>
            </div>
        );
    }
}

export default Search;