import { useState } from "react";
import axios from "axios";
import "../styles/Dictionary.css";
import Header from "./Header";
import Results from "./Results";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const pexelsApiKey = "WCl3X2mk20KLfWxlaRc8q4zNz5OSMWu67yfOxtnAsFjRbsyyXVKQjwOE";

function Dictionary() {
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleDictionaryResponse(response) {
    setResult(response.data);
  }

  function handleDictionaryError(error) {
    console.error("Dictionary API error:", error);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function handlePhotosError(error) {
    console.error("Pexels API error:", error);
  }

  function search(word) {
    const searchedWord = word.trim();

    if (!searchedWord) {
      return;
    }

    setResult(null);
    setPhotos([]);

    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
      searchedWord,
    )}`;

    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      searchedWord,
    )}&per_page=6`;

    axios
      .get(dictionaryApiUrl)
      .then(handleDictionaryResponse)
      .catch(handleDictionaryError);

    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: pexelsApiKey,
        },
      })
      .then(handlePhotosResponse)
      .catch(handlePhotosError);
  }

  return (
    <main className="Dictionary">
      <Header onSearch={search} />

      {result && (
        <section className="Dictionary-results">
          <div className="Dictionary-main">
            <Results result={result} />
          </div>

          <Sidebar result={result} photos={photos} />
        </section>
      )}

      <Footer />
    </main>
  );
}

export default Dictionary;
