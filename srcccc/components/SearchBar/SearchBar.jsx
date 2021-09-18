import React, { Component } from "react";
import style from "./SearchBar.module.css";

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
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={style.SearchForm_button}>
            <span className={style.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={style.SearchForm_input}
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
