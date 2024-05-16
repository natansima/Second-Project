import SearchMovie from "../components/SearchMovie";

function SearchPage({ searchMovie, searchTerm, setSearchTerm, searchResult }) {
  return (
    <div>
      <SearchMovie
        searchMovie={searchMovie}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResult={searchResult}
      />
    </div>
  );
}

export default SearchPage;
