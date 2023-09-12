import "./App.css";
import ResultCard from "./components/ResultCard";
import SearchBar from "./components/SearchBar";
import { useState } from "react";


function App() {
  const [searchResult, setSearchResult] = useState(null);
  return (
    <div className="App">
      <div className="search-bar-container">
        {/* <SearchBar searchResult={searchResult} setSearchResult={setSearchResult}/>
        {searchResult && <ResultCard result = {searchResult}/>} */}
        <ResultCard />
      </div>
    </div>
  );
}

export default App;
