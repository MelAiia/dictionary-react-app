import "../styles/Phonetics.css";

function Phonetics({ phonetic }) {
  return (
    <div className="Phonetics">
      <span>{phonetic.text}</span>

      {phonetic.audio && (
        <a href={phonetic.audio} target="_blank" rel="noreferrer">
          ▶ Listen
        </a>
      )}
    </div>
  );
}

export default Phonetics;
