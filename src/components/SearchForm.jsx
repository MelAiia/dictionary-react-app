import { useState } from "react";
import "../styles/SearchForm.css";

function SearchForm({ onSearch }) {
  const [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(word);
  }

  return (
    <section className="SearchForm">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="search"
          placeholder="Search an English word..."
          autoFocus
          value={word}
          onChange={handleWordChange}
        />

        <button type="submit">Search</button>
      </form>

      <small>Explore meanings, pronunciations, synonyms and examples.</small>
    </section>
  );
}

export default SearchForm;
