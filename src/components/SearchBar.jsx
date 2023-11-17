import { useState } from "react";
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
      <div className="flex">
        <div>
          <input
            className=" outline-none p-4 text-xl text-gray-900  rounded-l-xl bg-gray-50 focus:bg-gray-100 focus:ring-2 ring-inset focus:ring-blue-600 "
            id="input-text"
            placeholder="Enter Pokemon Name"
            required
            onChange={(e) => {
              setSeachInput(e.target.value);
            }}
          />
        </div>
        <button
          className=" text-xl border-2 border-gray-800 bg-orange-400 hover:bg-orange-600  font-medium rounded-r-xl px-4 py-2 "
          onClick={() => {
            if (searchInput !== "") {
              fetchData();
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="p-10">
        {searchResult != null ? (
          <p className="text-2xl font-bold text-white">
            {" "}
            {searchResult.name} was found in Pokedex
          </p>
        ) : (
          searchTerm && (
            <p className="text-2xl font-bold text-white">
              {" "}
              {searchTerm} was not found{" "}
            </p>
          )
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
