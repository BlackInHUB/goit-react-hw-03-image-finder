import PropTypes from 'prop-types'
import { Gallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({items}) => {
    return (
        <Gallery>
            {items.map(({ id, webformatURL, largeImageURL }) => (<ImageGalleryItem key={id} web={webformatURL} large={largeImageURL} />))}
        </Gallery>
    )
}

// ImageGallery.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.number.isRequired,
//         webformatURL: PropTypes.string.isRequired,
//         largeImageURL: PropTypes.string.isRequired
//     }))
// }