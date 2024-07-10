import ImageCard from '../ImageCard/ImageCard';
import './ImageGallery.css';

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  setSelectedImage: (image: Image) => void;
}

const ImageGallery = ({ images, setSelectedImage }: ImageGalleryProps) => {
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