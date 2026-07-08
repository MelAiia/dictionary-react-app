import "../styles/Synonyms.css";

function Synonyms({ synonyms, hideTitle = false }) {
  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <div className="Synonyms">
      {!hideTitle && <h4 className="Synonyms-title">Synonyms</h4>}

      <ul className="Synonyms-list">
        {synonyms.map((synonym, index) => (
          <li key={index}>
            <button type="button">{synonym}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Synonyms;
