import "../styles/Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

function Results({ result }) {
  const wordData = result[0];

  return (
    <section className="Results">
      <div className="Results-header">
        <h2>{wordData.word}</h2>

        {wordData.phonetics.map((phonetic, index) => (
          <Phonetics key={index} phonetic={phonetic} />
        ))}
      </div>

      <div className="Results-content">
        {wordData.meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning} />
        ))}
      </div>
    </section>
  );
}

export default Results;
