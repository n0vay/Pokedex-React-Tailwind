import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";
import backgroundImage from "../assets/images/background3.png";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState(null);
  return (
    <div
      className="search-bar-container h-screen w-screen "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundblendmode: "multiply",
        position: "fixed",
        top: 88,
        left: 88,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <SearchBar
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      {searchResult && <ResultCard result={searchResult} />}
    </div>
  );
};

export default SearchPage;
