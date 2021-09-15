import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images, selectImg }) {
  return (
    <ul className="ImageGallery">
      {images.map((item) => (
        <ImageGalleryItem
          key={item.id}
          webImage={item.webformatURL}
          largeUrl={item.largeImageURL}
          onSelect={selectImg}
        />
      ))}
    </ul>
  );
}
