import { useState } from "react";
import axios from "axios";
import "../styles/Dictionary.css";
import Header from "./Header";
import Results from "./Results";
import Footer from "./Footer";
import Photos from "./Photos";

const pexelsApiKey = "WCl3X2mk20KLfWxlaRc8q4zNz5OSMWu67yfOxtnAsFjRbsyyXVKQjwOE";

function Dictionary() {
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleDictionaryResponse(response) {
    setResult(response.data);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(word) {
    setResult(null);
    setPhotos([]);

    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;

    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: pexelsApiKey,
        },
      })
      .then(handlePhotosResponse);
  }

  return (
    <main className="Dictionary">
      <Header onSearch={search} />

      {result && <Results result={result} />}

      {photos.length > 0 && <Photos photos={photos} />}

      <Footer />
    </main>
  );
}

export default Dictionary;
