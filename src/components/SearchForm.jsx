import { useState } from "react";
import axios from "axios";
import "../styles/SearchForm.css";

function SearchForm({ setResult }) {
  const [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function searchDictionary() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(showResponse);
  }

  function showResponse(response) {
    setResult(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchDictionary();
  }

  return (
    <section className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a word..."
          autoFocus
          value={word}
          onChange={handleWordChange}
        />

        <button type="submit">Search</button>
      </form>

      <small>Type a word and press Search to see its meaning.</small>
    </section>
  );
}

export default SearchForm;
