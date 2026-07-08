import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/aiia-melnychenko-09b52a275/"
        target="_blank"
        rel="noreferrer"
      >
        Melnychenko Aiia
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/MelAiia/dictionary-react-app"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and is{" "}
      <a
        href="https://dictionary-react-aiia.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
      .<div className="Footer-heart">♡</div>
    </footer>
  );
}

export default Footer;
