import "../styles/Header.css";
import heroLeft from "../assets/illustrations/hero-left.svg";
import heroRight from "../assets/illustrations/hero-right.svg";
import heroDots from "../assets/illustrations/hero-dots.svg";

import SearchForm from "./SearchForm";

function Header({ onSearch }) {
  return (
    <header className="Header">
      <img src={heroLeft} alt="" className="hero-left" />

      <img src={heroRight} alt="" className="hero-right" />

      <div className="hero-glow"></div>

      <div className="Header-content">
        <h1>Dictionary</h1>

        <p>Find definitions, pronunciations and examples.</p>

        <img src={heroDots} alt="" className="hero-dots" />

        <SearchForm onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
