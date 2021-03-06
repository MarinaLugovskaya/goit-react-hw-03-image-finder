import React, { Component } from "react";
import css from "../Searchbar/Searchbar.module.css";

class SearchBar extends Component {
  state = {
    insearch: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitData(this.state.insearch);
  };

  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({
      insearch: value,
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_labe}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.insearch}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
