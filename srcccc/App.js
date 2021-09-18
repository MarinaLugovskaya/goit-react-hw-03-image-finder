import React, { Component } from "react";
import ImageGallery from "./components/GalleryList/ImageGallery.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import BtnLoadMore from "./components/BtnLoadMore/BtnLoadMore.jsx";
import { fetchPicture } from "./components/Services/PixabayAPI";
import Modal from "./components/Modal/Modal.jsx";
import "./main.module.css";
import LoadSpinner from "./components/Loader/Loader.jsx";

class App extends Component {
  state = {
    gallery: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    imageForModal: "",
    title: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fechImages();
    }

    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.toggleModal();
      window.removeEventListener("keydown", this.handleKeyDown);
    }
  };

  onClickGalleryItem = (src, alt) => {
    this.toggleModal();
    this.setState({ imageForModal: src, title: alt });
  };

  backDroppCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitData = (query) => {
    this.setState({
      searchQuery: query,
      gallery: [],
      currentPage: 1,
    });
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fechImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      currentPage,
      searchQuery,
      error: null,
    };

    this.setState({
      isLoading: true,
    });
    fetchPicture(options)
      .then((hits) =>
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        {
          currentPage > 1 && this.scrollTo();
        }
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const { gallery, isLoading, showModal, imageForModal, title } = this.state;
    const shouldRenderBtnLoadMore = gallery.length > 0 && !isLoading;
    return (
      <>
        <SearchBar onSubmitData={this.formSubmitData} />
        <ImageGallery
          gallery={this.state.gallery}
          onClick={this.toggleModal}
          onClickImage={this.onClickGalleryItem}
        />
        {isLoading && <LoadSpinner />}
        {shouldRenderBtnLoadMore && <BtnLoadMore onClick={this.fechImages} />}
        {showModal && (
          <Modal
            onClickImage={this.backDroppCloseModal}
            imageForModal={imageForModal}
            title={title}
          />
        )}
      </>
    );
  }
}

export default App;
