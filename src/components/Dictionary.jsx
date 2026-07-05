import Header from "./Header";
import SearchForm from "./SearchForm";
import Results from "./Results";
import Footer from "./Footer";

function Dictionary() {
  return (
    <main className="Dictionary">
      <Header />
      <SearchForm />
      <Results />
      <Footer />
    </main>
  );
}

export default Dictionary;
