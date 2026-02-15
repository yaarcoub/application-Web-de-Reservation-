const HotelGallery = ({ images = [] }) => {
  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div
      id="hotelCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner rounded-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={img.url}
              className="d-block w-100"
              alt={`hotel-${index}`}
              style={{ height: "420px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hotelCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hotelCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};


export default HotelGallery;
