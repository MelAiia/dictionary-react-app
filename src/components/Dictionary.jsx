import { useState } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Results from "./Results";
import Footer from "./Footer";

function Dictionary() {
  const [result, setResult] = useState(null);
  return (
    <main className="Dictionary">
      <Header />
      <SearchForm setResult={setResult} />
      <Results />
      <Footer />
    </main>
  );
}

export default Dictionary;
