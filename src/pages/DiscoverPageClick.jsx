import { useState } from "react";
import ResultCard from "../components/ResultCard";

const DiscoverPageClick = () => {
  const [pokeList, setPokeList] = useState([]);
  const [offset, setOffset] = useState(0);
  let loading = false;

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

  const fetchPokemonData = async () => {
    loading = true;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      const pokemonDataPromises = data.results.map(async (poke) => {
        const pokemonResponse = await fetch(poke.url);
        const pokemonResult = await pokemonResponse.json();
        return new pokemon(
          pokemonResult.name,
          pokemonResult.id,
          pokemonResult.stats[0].base_stat,
          pokemonResult.sprites.other["official-artwork"].front_default,
          pokemonResult.height,
          pokemonResult.weight,
          pokemonResult.types,
          pokemonResult.abilities,
          pokemonResult.stats
        );
      });

      const newPokemonData = await Promise.all(pokemonDataPromises);
      setOffset(offset + 10);
      

      setPokeList((prevPokeList) => [...prevPokeList, ...newPokemonData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      loading = false;
    }
  };

  return (
    <>
      <div>
        <p>Hi</p>
        <div className="flex flex-row flex-wrap p-5">
          {/* <div className="grid gap-5 p-10 lg:grid-cols-6 md:grid-cols-2"> */}
          {pokeList.map((poke, index) => (
            <div className="p-3">
              <ResultCard key={index} result={poke} />
            </div>
          ))}
          {loading && <p>Loading...</p>}
        </div>
        <button onClick={fetchPokemonData}>Fetch Pokemon</button>
      </div>
    </>
  );
};

export default DiscoverPageClick;
