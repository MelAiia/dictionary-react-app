function Results({ result }) {
  const wordData = result[0];
  const meaning = wordData.meanings[0];
  const definition = meaning.definitions[0];

  return (
    <section className="Results">
      <h2>{wordData.word}</h2>

      <p>{wordData.phonetic}</p>

      <p>{definition.definition}</p>
    </section>
  );
}

export default Results;
