// import PropTypes from "prop-types";
import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    name: "",
  };

  handleInputChange = (evt) => {
    this.setState({ name: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    if (this.state.name.trim() === "") {
      alert("введите имя картинки");
      return;
    }

    this.props.onSubmit(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form onSubmit={this.handleSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              value={this.state.name}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleInputChange}
            />
          </form>
        </header>
      </>
    );
  }
}
