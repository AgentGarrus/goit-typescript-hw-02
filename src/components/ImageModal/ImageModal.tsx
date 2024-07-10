import Modal from 'react-modal';
import './ImageModal.css';

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: {
    urls: {
      regular: string;
    };
    alt_description: string;
  } | null;
}

const ImageModal = ({ isOpen, onRequestClose, image }: ImageModalProps) => (
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