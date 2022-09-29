import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { Overlay, Modal, ModalImg } from "./ModalWindow.styled";

const modalRoot = document.querySelector('#modal-root')

export class ModalWindow extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscDown)
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscDown)
        document.body.style.overflow = 'unset';
    }
    
    handleEscDown = e => {
        if (e.key === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget !== e.target) {
            this.props.onClose();
        }
    }

    render() {
        const { large } = this.props;

        return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <Modal>
                <ModalImg src={large} />
            </Modal>
        </Overlay>,
        modalRoot,
        )
    }
}

ModalWindow.propTypes = {
    large: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}