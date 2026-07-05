import { useState } from "react";
import axios from "axios";

function SearchForm() {
  const [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(showResponse);
  }

  function showResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
