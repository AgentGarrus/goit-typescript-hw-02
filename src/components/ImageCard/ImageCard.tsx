import './ImageCard.css';

interface ImageCardProps {
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;