import { Component } from "react";
import { fetchImages } from "../services/Api";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import SearchBar from "./Searchbar/Searchbar";
import css from "../components/Style.module.css";

export default class App extends Component {
  state = {
    name: null,
    images: [],
    page: 1,
    loading: false,
    selectImage: null,
  };

  handleFormSubmit = (name) => {
    this.setState({ name });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.name !== this.state.name) {
      const images = fetchImages(this.state.name);
      this.setState({ images });
    }
  }

  handleSelectImg = (url) => {
    this.setState({
      selectImage: url,
    });
  };

  clickMoreBtn = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery
          images={this.state.images}
          selectImg={this.handleSelectImg} */}
        {/* /> */}
        <Button onClick={this.clickMoreBtn} />
      </>
    );
  }
}
