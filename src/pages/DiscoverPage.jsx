import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";
import backgroundImage from "../assets/images/background3.png";

const DiscoverPage = () => {
    const [pokeList, setPokeList] = useState([]);
    let loading = false;
    let off = 0;

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

    const fetchPokemonData = async (init = false) => {
        loading = true;
        const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${off}`;
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
                    pokemonResult.sprites.other[
                        "official-artwork"
                    ].front_default,
                    pokemonResult.height,
                    pokemonResult.weight,
                    pokemonResult.types,
                    pokemonResult.abilities,
                    pokemonResult.stats
                );
            });

            const newPokemonData = await Promise.all(pokemonDataPromises);
            off = off + 10;

            if (off > 10 || init) {
                setPokeList((prevPokeList) => [
                    ...prevPokeList,
                    ...newPokemonData,
                ]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            loading = false;
        }
    };

    useEffect(() => {
        fetchPokemonData(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 100
            ) {
                if (!loading) {
                    fetchPokemonData();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return (
        <>
            {/* <div className="grid gap-5 p-10 lg:grid-cols-6 md:grid-cols-2"> */}

            <div
                className=" flex flex-row flex-wrap pt-5 gap-8 justify-center bg-scroll"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    //backgroundattachment: "fixed",
                    backgroundposition: "center",
                }}
            >
                {pokeList.map((poke, index) => (
                    <ResultCard key={index} result={poke} />
                ))}
                {loading && <p>Loading...</p>}
            </div>
        </>
    );
};

//  {/* <div class="flex flex-row flex-wrap p-5"> */}
//  {/* <div class="flex flex-row flex-wrap p-5"> */}
export default DiscoverPage;
