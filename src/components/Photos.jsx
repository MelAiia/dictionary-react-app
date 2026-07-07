import "../styles/Photos.css";

function Photos({ photos }) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return <section className="Photos">Photos coming soon...</section>;
}

export default Photos;
