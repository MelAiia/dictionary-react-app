import { useState } from "react";

function SearchForm() {
  const [word, setWord] = useState("");

  return (
    <section className="SearchForm">
      <form>
        <input type="search" placeholder="Enter a word..." autoFocus />

        <button type="submit">Search</button>
      </form>

      <small>Type a word and press Search to see its meaning.</small>
    </section>
  );
}

export default SearchForm;
