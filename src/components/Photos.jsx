import "../styles/Photos.css";

function Photos({ photos }) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <section className="Photos">
      <div className="Photos-grid">
        {photos.map((photo) => (
          <a
            href={photo.url}
            key={photo.id}
            target="_blank"
            rel="noreferrer"
            className="Photos-link"
          >
            <img
              src={photo.src.landscape}
              alt={photo.alt || "Pexels search result"}
              className="Photos-image"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Photos;
