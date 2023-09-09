import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import {PropTypes} from "prop-types"

const SearchBar = ({searchResult, setSearchResult}) => {
  const [searchInput, setSeachInput] = useState("");
  const [searchTerm, setSearchTerm] = useState(null);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  function pokemon(name, hp, image, height, weight, types, abilities, stats) {
    this.name = name;
    this.hp = hp
    this.image = image;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.abilities = abilities;
    this.stats = stats;
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
          result.stats[0].base_stat,
          result.sprites.other['official-artwork'].front_default,
          result.height,
          result.weight,
          result.types,
          result.abilities,
          result.stats
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

SearchBar.propTypes = {
  searchResult:PropTypes.any,
  setSearchResult:PropTypes.any
}
export default SearchBar;
