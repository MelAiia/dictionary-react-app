import "../styles/Meaning.css";
import Synonyms from "./Synonyms";

function Meaning({ meaning }) {
  const definition = meaning.definitions[0];
  return (
    <article className="Meaning">
      <div className="Meaning-header">
        <h3>{meaning.partOfSpeech}</h3>
      </div>

      <div className="Meaning-body">
        <p className="definition">{definition.definition}</p>

        {definition.example && (
          <p className="example">"{definition.example}"</p>
        )}

        <Synonyms synonyms={meaning.synonyms} />
      </div>
    </article>
  );
}

export default Meaning;
