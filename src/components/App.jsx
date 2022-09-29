import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import * as API from "services/getImgsApi";
import { Box } from "../utils/Box/Box";
import { ColorRing } from 'react-loader-spinner'

export class App extends Component {
  state = {
    searchedValue: null,
    images: [],
    page: 1,
    totalPages: null,
    isLoading: false
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }

  getSerchedValues = (value) => {
    this.setState({ searchedValue: value, images: [], page: 1, totalPages: null })
  }

  componentDidUpdate(_, prevState) {
    const { searchedValue, page } = this.state;

    if (prevState.searchedValue !== searchedValue || prevState.page !== page) {
      this.setState({isLoading: true})
      setTimeout(() => {
        API.getImages(searchedValue, page)
          .then(data => this.setState(prevState => ({
            images:
              [...prevState.images, ...data.hits],
              totalPages: Number((data.totalHits / 12).toFixed(''))
          })))
        .catch(error => console.log(error))
        .finally(this.setState({isLoading: false}))
    }, 1000)
      }
  }
  
  render() {
    const { searchedValue, images, page, totalPages, isLoading } = this.state;

    return (
    <Box textAlign="center">
        <Searchbar onSubmit={this.getSerchedValues} />
        {totalPages === 0  && <p>За вашим запитом {searchedValue} нічого не знайдено :( Спробуйте ще.</p>}
        {images.length > 0 && <ImageGallery items={images} />}
        {isLoading && <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
        {(page < totalPages && !isLoading) && <LoadMoreBtn loadMore={this.onLoadMore} />}
    </Box>
  );
  }
};