import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css';
import { Image } from '../../unsplash';

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="modal-overlay"
    className="modal-content"
  >
    {image && (
      <div>
        <img className="modal-image" src={image.urls.regular} alt={image.alt_description} />
      </div>
    )}
  </Modal>
);

export default ImageModal;