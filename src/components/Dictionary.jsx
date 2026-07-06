import { useState } from "react";
import "../styles/Dictionary.css";
import Header from "./Header";
import Results from "./Results";
import Footer from "./Footer";

function Dictionary() {
  const [result, setResult] = useState(null);

  return (
    <main className="Dictionary">
      <Header setResult={setResult} />

      {result && <Results result={result} />}

      <Footer />
    </main>
  );
}

export default Dictionary;
