import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

const DiscoverPage = () => {
  const [pokeList, setPokeList] = useState([]);
  function pokemon(name, hp, image, height, weight, types, abilities, stats) {
    this.name = name;
    this.hp = hp[0].base_stat;
    this.image = image.sprites.other["official-artwork"].front_default;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.abilities = abilities;
    this.stats = stats;
  }

  const fetchdatanew = () => {
    const url1 = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
    return fetch(url1)
      .catch()
      .then((response) => response.json())
      .then((json) => {
        var result = json.results;
        //console.log(result);
        return result.map((poke) =>
          fetch("https://pokeapi.co/api/v2/pokemon/" + poke.name)
            .catch()
            .then((response) => response.json())
        );
      });
  };

  return (
    <>
      <div
        onClick={() => {
          fetchdatanew().then((x) =>
            Promise.all(x).then((response) => setPokeList(response))
          );
        }}
      >
        Start
      </div>
      {/* {Promise.all(fetchdatanew()).then((responses) =>
          console.log(responses)
        )} */}
      <div>
        {pokeList.map((poke) => (
          <ResultCard key={poke.name} result={poke} />
        ))}
      </div>
    </>
  );
};

export default DiscoverPage;
