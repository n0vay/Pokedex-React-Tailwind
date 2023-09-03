import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSeachInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  function pokemon(name, abilities, moves, species, stats, image) {
    this.name = name;
    this.abilities = abilities;
    this.moves = moves;
    this.species = species;
    this.stats = stats;
    this.image = image;
  }

  const fetchData = () => {
    setSearchTerm(searchInput);
    setSearchResult(null);
    fetch(url + searchInput.toLowerCase())
      .catch(() => {
        setSearchResult(null);
      })
      .then((response) => response.json())
      .then((json) => {
        var result = json;
        console.log(result);
        let pokemonResult = new pokemon(
          result.name,
          result.abilities,
          result.moves,
          result.species,
          result.stats,
          result.image
        );
        setSearchResult(pokemonResult);
      });
  };

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          id="input-text"
          placeholder="Type to search..."
          onChange={(e) => {
            setSeachInput(e.target.value);
          }}
        />
        <button onClick={fetchData}>Search</button>
      </div>
      <div>
        {searchResult != null ? (
          <p> {searchResult.name} was found </p>
        ) : (
          searchTerm && <p> {searchTerm} was not found </p>
        )}
      </div>
    </>
  );
};

export default SearchBar;
