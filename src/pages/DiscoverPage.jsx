import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

const DiscoverPage = () => {
  const [pokeList, setPokeList] = useState([]);
  function pokemon(name, hp, image, height, weight, types, abilities, stats) {
    this.name = name;
    this.hp = hp;
    this.image = image;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.abilities = abilities;
    this.stats = stats;
  }

  const fetchdatanew = () => {
    const url1 = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
    return fetch(url1)
      .catch()
      .then((response) => response.json())
      .then((json) => {
        var result = json.results;
        return result.map((poke) =>
          fetch("https://pokeapi.co/api/v2/pokemon/" + poke.name)
            .then((response) => response.json())
            .then((result) => {
              let pokemonResult = new pokemon(
                result.name,
                result.stats[0].base_stat,
                result.sprites.other["official-artwork"].front_default,
                result.height,
                result.weight,
                result.types,
                result.abilities,
                result.stats
              );
              return pokemonResult;
            })
        );
      });
  };

  return (
    <>
      <div
        onClick={() => {
          fetchdatanew().then((x) =>
            Promise.all(x).then((response) => {
              setPokeList(response);
            })
          );
        }}
      >
        Start
      </div>
      <div class="grid gap-5 p-10 lg:grid-cols-6 md:grid-cols-2">
        {/* <div class="flex flex-row flex-wrap p-5"> */}
        {pokeList.map((poke) => (
          <ResultCard key={poke.name} result={poke} />
        ))}
      </div>
    </>
  );
};

export default DiscoverPage;
