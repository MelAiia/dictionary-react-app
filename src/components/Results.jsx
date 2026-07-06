import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

function Results({ result }) {
  const wordData = result[0];

  return (
    <section className="Results">
      <h2>{wordData.word}</h2>

      {wordData.phonetics.map((phonetic, index) => (
        <Phonetics key={index} phonetic={phonetic} />
      ))}

      {wordData.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </section>
  );
}

export default Results;
