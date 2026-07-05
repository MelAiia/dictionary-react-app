import { useState } from "react";

function SearchForm() {
  const [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <section className="SearchForm">
      <form>
        <input
          type="search"
          placeholder="Enter a word..."
          autoFocus
          onChange={handleWordChange}
        />

        <button type="submit">Search</button>
      </form>

      <p>Searching for: {word}</p>

      <small>Type a word and press Search to see its meaning.</small>
    </section>
  );
}

export default SearchForm;
