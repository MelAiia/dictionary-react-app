function Results({ result }) {
  return (
    <section className="Results">
      <h2>{result[0].word}</h2>

      <p>{result[0].phonetic}</p>

      <p>{result[0].meanings[0].definitions[0].definition}</p>
    </section>
  );
}

export default Results;
