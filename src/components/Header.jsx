import "../styles/Header.css";
import bookIcon from "../assets/icons/book.svg";
import heroLeft from "../assets/illustrations/hero-left.svg";
import heroRight from "../assets/illustrations/hero-right.svg";
import heroDots from "../assets/illustrations/hero-dots.svg";

import SearchForm from "./SearchForm";

function Header({ setResult }) {
  return (
    <header className="Header">
      <img src={heroLeft} alt="" className="hero-left" />

      <img src={heroRight} alt="" className="hero-right" />

      <div className="Header-content">
        <div className="Header-icon">
          <img src={bookIcon} alt="Dictionary" />
        </div>

        <h1>Dictionary</h1>

        <p>Find definitions, pronunciations and examples.</p>

        <img src={heroDots} alt="" className="hero-dots" />

        <SearchForm setResult={setResult} />
      </div>
    </header>
  );
}

export default Header;
