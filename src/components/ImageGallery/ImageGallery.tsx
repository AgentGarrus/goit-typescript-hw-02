import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ImageGallery.css';
import { Image } from '../../unsplash';

interface ImageGalleryProps {
  images: Image[];
  setSelectedImage: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, setSelectedImage }) => {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id} onClick={() => setSelectedImage(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;