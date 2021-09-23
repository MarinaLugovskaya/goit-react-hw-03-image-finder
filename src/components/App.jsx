import { Component } from 'react';
import { fetchImages } from '../services/Api';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import scroll from '../services/scroll';
import css from '../components/Style.module.css';

class App extends Component {
  state = {
    gallery: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    imageForModal: '',
    title: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fechImages();
    }

    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.toggleModal();
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  };

  onClickGalleryItem = (src, alt) => {
    this.toggleModal();
    this.setState({ imageForModal: src, title: alt });
  };

  backDroppCloseModal = event => {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitData = query => {
    this.setState({
      searchQuery: query,
      gallery: [],
      currentPage: 1,
    });
  };

  // scrollTo = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

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
    fetchImages(options)
      .then(hits =>
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
        })),
      )
      .then(() =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
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
        {isLoading && <Loader />}
        {shouldRenderBtnLoadMore && <Button onClick={this.fechImages} />}
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
