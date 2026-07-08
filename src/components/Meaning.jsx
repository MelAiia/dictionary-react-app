import "../styles/Meaning.css";

function Meaning({ meaning }) {
  const definitions = meaning.definitions.slice(0, 3);

  return (
    <article className="Meaning">
      <div className="Meaning-header">
        <h3>{meaning.partOfSpeech}</h3>
      </div>

      <ol className="Meaning-definitions">
        {definitions.map((definition, index) => (
          <li key={index}>
            <p className="definition">{definition.definition}</p>

            {definition.example && (
              <p className="example">"{definition.example}"</p>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}

export default Meaning;
