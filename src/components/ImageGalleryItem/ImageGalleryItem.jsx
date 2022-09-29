import { Component } from "react";
import PropTypes from 'prop-types'
import { GalleryItem, GalleryItemImg } from "./ImageGalleryItem.styled";
import { ModalWindow } from "components/ModalWindow/ModalWindow";

export class ImageGalleryItem extends Component {
    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}))
    }

    render() {
        const { web, large } = this.props;
        const { isOpen } = this.state;
        
        return (
            <GalleryItem onClick={this.toggleModal}>
                <GalleryItemImg src={web} loading="lazy" />
                {isOpen && <ModalWindow large={large} onClose={this.toggleModal} />}
            </GalleryItem>
        )
    }
}

ImageGalleryItem.propTypes = {
    web: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired
}