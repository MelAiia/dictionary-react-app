import "../styles/Synonyms.css";

function Synonyms({ synonyms }) {
  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <div className="Synonyms">
      <h4>Synonyms</h4>

      <ul>
        {synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    </div>
  );
}

export default Synonyms;
