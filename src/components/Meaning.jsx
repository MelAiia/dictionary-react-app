function Meaning({ meaning }) {
  const definition = meaning.definitions[0];
  return (
    <section className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>{definition.definition}</p>
      {definition.example && <p className="example">"{definition.example}""</p>}
    </section>
  );
}

export default Meaning;
