import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

const DiscoverPage2 = () => {
  const [pokelist, setPokeList] = useState([]);
  const [onePokemon, setOnePokemon] = useState(null);
  const [pokeState, setPokeState] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

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

  const fetchData = (pokeid) => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokeid)
      .catch()
      .then((response) => response.json())
      .then((json) => {
        var result = json;
        console.log(result);
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
        console.log(pokemonResult);
        setOnePokemon(pokemonResult);
      });
  };
  const fetchdatanew = () => {
    const url1 = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
    let listofpoke = [];
    return fetch(url1)
      .catch()
      .then((response) => response.json())
      .then((json) => {
        var result = json.results;
        console.log(result);
        return result.map(
          (poke) =>
            fetch("https://pokeapi.co/api/v2/pokemon/" + poke.name)
              .catch()
              .then((response) => response.json())
          // .then((json) => {
          //   var singlepoke = json;
          //   console.log(singlepoke);
          //   listofpoke.push(singlepoke);
          //   console.log(listofpoke);
          // })
        );
      });
  };

  useEffect(() => {
    fetch(url)
      .catch(() => {})
      .then(async (res) => {
        var result = await res.json();
        //console.log(result.results);
        setPokeList(result.results);
      });
  }, [url]);

  return (
    <>
      <div>Hi</div>
      {/* <div>
        {pokelist.map((poke) => (
          <div key={poke.name}>
            {onePokemon && <ResultCard result={onePokemon} />}
          </div>
        ))}
      </div> */}
      {/* <div
        onClick={() => {
          fetchdatanew().then((x) => console.log(x));
        }}
      >
        Start
      </div> */}
      <div>
        {Promise.all(fetchdatanew()).then((responses) =>
          responses
            .forEach((response) => response.json())
            .then((json) => {
              var result = json;
              console.log(result);
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
              setOnePokemon(pokemonResult);
            })
        )}
        <ResultCard result={onePokemon} />
      </div>
    </>
  );
};

export default DiscoverPage2;
