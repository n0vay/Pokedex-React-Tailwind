import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

const DiscoverPage = () => {
  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

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

  const fetchPokemonData = async () => {
    setIsLoading(true);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      const pokemonDataPromises = data.results.map(async (poke) => {
        const pokemonResponse = await fetch(poke.url);
        const pokemonResult = await pokemonResponse.json();
        return new pokemon(
          pokemonResult.name,
          pokemonResult.stats[0].base_stat,
          pokemonResult.sprites.other["official-artwork"].front_default,
          pokemonResult.height,
          pokemonResult.weight,
          pokemonResult.types,
          pokemonResult.abilities,
          pokemonResult.stats
        );
      });

      // return fetch(url1)
      //   .catch()
      //   .then((response) => response.json())
      //   .then((json) => {
      //     var result = json.results;
      //     return result.map((poke) =>
      //       fetch("https://pokeapi.co/api/v2/pokemon/" + poke.name)
      //         .then((response) => response.json())
      //         .then((result) => {
      //           let pokemonResult = new pokemon(
      //             result.name,
      //             result.stats[0].base_stat,
      //             result.sprites.other["official-artwork"].front_default,
      //             result.height,
      //             result.weight,
      //             result.types,
      //             result.abilities,
      //             result.stats
      //           );
      //           return pokemonResult;
      //         })
      //     );
      //   });
      const newPokemonData = await Promise.all(pokemonDataPromises);
      setOffset((prevOffset) => prevOffset+30);
      setPokeList((prevPokeList) => [...prevPokeList, ...newPokemonData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        if (!isLoading) {
          fetchPokemonData();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return (
    <>
      {/* <div
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
        {pokeList.map((poke) => (
          <ResultCard key={poke.name} result={poke} />
        ))}
      </div> */}
      <div className="grid gap-5 p-10 lg:grid-cols-6 md:grid-cols-2">
        {pokeList.map((poke, index) => (
          <ResultCard key={index} result={poke} />
        ))}
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  );
};

//  {/* <div class="flex flex-row flex-wrap p-5"> */}
export default DiscoverPage;
