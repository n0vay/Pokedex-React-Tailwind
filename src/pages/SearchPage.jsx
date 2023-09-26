import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState(null);
  return (
    <div className="search-bar-container">
      <SearchBar
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      {searchResult && <ResultCard result={searchResult} />}
    </div>
  );
};

export default SearchPage;
