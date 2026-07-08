import "../styles/Sidebar.css";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
import Synonyms from "./Synonyms";

function Sidebar({ result, photos }) {
  const wordData = result[0];

  const phonetic = wordData.phonetics.find((item) => item.text || item.audio);

  const synonyms = wordData.meanings
    .flatMap((meaning) => meaning.synonyms)
    .filter((synonym, index, array) => array.indexOf(synonym) === index)
    .slice(0, 8);

  return (
    <aside className="Sidebar">
      {phonetic && (
        <section className="Sidebar-card">
          <div className="Sidebar-card-title">
            <span className="Sidebar-icon">⌁</span>
            <h3>Pronunciation</h3>
          </div>
          <Phonetics phonetic={phonetic} />
        </section>
      )}

      {synonyms.length > 0 && (
        <section className="Sidebar-card">
          <div className="Sidebar-card-title">
            <span className="Sidebar-icon">★</span>
            <h3>Synonyms</h3>
          </div>

          <Synonyms synonyms={synonyms} hideTitle />
        </section>
      )}

      {photos.length > 0 && (
        <section className="Sidebar-card">
          <div className="Sidebar-card-title">
            <span className="Sidebar-icon">▧</span>
            <h3>Photos</h3>
          </div>
          <Photos photos={photos} />
        </section>
      )}
    </aside>
  );
}

export default Sidebar;
