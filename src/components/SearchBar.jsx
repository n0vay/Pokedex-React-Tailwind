import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PropTypes } from "prop-types";

const SearchBar = ({ searchResult, setSearchResult }) => {
  const [searchInput, setSeachInput] = useState("");
  const [searchTerm, setSearchTerm] = useState(null);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  function pokemon(
    name,
    id,
    hp,
    image,
    height,
    weight,
    types,
    abilities,
    stats
  ) {
    this.name = name;
    this.id = id;
    this.hp = hp;
    this.image = image;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.abilities = abilities;
    this.stats = stats;
  }
  // Function to fetch Data
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

        let pokemonResult = new pokemon(
          result.name,
          result.id,
          result.stats[0].base_stat,
          result.sprites.other["official-artwork"].front_default,
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
      <div className="px-2 py-3 bg-white flex shadow-2xl border-2 border-gray-600 rounded-lg justify-between focus:ring-blue-500">
        <div className="">
          <FaSearch className="py-2 ml-2 h-8 w-8" id="search-icon" />
        </div>
        <div>
          <input
            className="px-2 align-middle focus:ring-blue-500"
            id="input-text"
            placeholder="Type to search..."
            onChange={(e) => {
              setSeachInput(e.target.value);
            }}
          />
        </div>
        <button
          className="Text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={fetchData}
        >
          Search
        </button>
      </div>

      <div className="p-10">
        {searchResult != null ? (
          <p> {searchResult.name} was found in Pokedex</p>
        ) : (
          searchTerm && <p> {searchTerm} was not found </p>
        )}
      </div>
    </>
  );
};

SearchBar.propTypes = {
  searchResult: PropTypes.any,
  setSearchResult: PropTypes.any,
};
export default SearchBar;
