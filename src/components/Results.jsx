import Meaning from "./Meaning";

function Results({ result }) {
  const wordData = result[0];

  return (
    <section className="Results">
      <h2>{wordData.word}</h2>

      <p>{wordData.phonetic}</p>

      {wordData.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </section>
  );
}

export default Results;
