import speakerIcon from "../assets/icons/speaker.svg";
import "../styles/Phonetics.css";

function Phonetics({ phonetic }) {
  function playAudio() {
    const audio = new Audio(phonetic.audio);
    audio.play();
  }

  return (
    <div className="Phonetics">
      <div className="Phonetics-text">{phonetic.text}</div>

      {phonetic.audio && (
        <button
          type="button"
          className="Phonetics-audio"
          onClick={playAudio}
          aria-label="Play pronunciation"
        >
          <img src={speakerIcon} alt="" />
        </button>
      )}
    </div>
  );
}

export default Phonetics;
