import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images, selectImg }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webImage={image.webformatURL}
          largeUrl={image.largeImageURL}
          onSelect={selectImg}
        />
      ))}
    </ul>
  );
}
