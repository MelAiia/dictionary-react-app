import "../styles/Header.css";
import SearchForm from "./SearchForm";
import bookIcon from "../assets/icons/book.svg";

function Header({ setResult }) {
  return (
    <header className="Header">
      <div className="Header-decoration left"></div>

      <div className="Header-decoration right"></div>

      <div className="Header-content">
        <div className="Header-icon">
          <img src={bookIcon} alt="Dictionary" />
        </div>

        <h1>Dictionary</h1>

        <p>Find definitions, pronunciations and examples.</p>

        <SearchForm setResult={setResult} />
      </div>
    </header>
  );
}

export default Header;
