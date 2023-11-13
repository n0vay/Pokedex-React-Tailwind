import { useLoaderData } from "react-router-dom";
import RotatingSprite from "./Sprite";

const PokemonDetails = () => {
  const data = useLoaderData();

  //const sprites = [data.sprites.front_default, data.sprites.back_default];

  return (
    <div className="p-5">
      <div className="flex flex-row bg-orange-400 rounded-md p-10">
        <div className="mx-10">
          <div className="font-bold text-4xl">Pokédex Data</div>
          <div className="font-bold text-3xl mb-4">
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </div>
          <div className="flex">
            <div className="flex gap-2 font-bold text-xl bg-gray-800 rounded-md text-center border-2  border-gray-600 text-white px-2 py-1 mb-2">
              Type
              {data.types.map((type) => (
                <div
                  key={type.type.name}
                  className=" bg-gray-600 rounded-md text-center border-2  border-gray-600 text-white px-2 font-bold text-base"
                >
                  {type.type.name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className=" flex gap-2 font-bold text-xl bg-gray-800 rounded-md text-center border-2  border-gray-600 text-white px-2 py-1">
              Ability
              {data.abilities.map((ability) => (
                <div
                  key={ability.ability.name}
                  className="bg-gray-600 rounded-md text-center border-2  border-gray-600 text-white px-2 font-bold text-base"
                >
                  {ability.ability.name}
                </div>
              ))}
            </div>
          </div>
          <img
            src={data.sprites.other["official-artwork"].front_default}
            className="h-30"
            alt="Booticamp"
          />
        </div>
        <div>
          <div className="border-2 bg-gray-800 p-5 ml-10 border-gray-800 rounded-sm shadow-[-10px_10px_0px_0px_rgba(160,174,192)]">
            <div className="font-bold text-xl mb-4 text-white">Stats</div>
            {data.stats.map((stat, index) => (
              <div className="flex" key={index}>
                <div className="text-lg text-white">
                  {stat.stat.name.charAt(0).toUpperCase() +
                    stat.stat.name.slice(1)}{" "}
                  :
                </div>
                <div className="text-lg text-white">{stat.base_stat}</div>
              </div>
            ))}
          </div>
          
        </div>
        <div>
          <div className="border-2 bg-gray-800 p-5 ml-10 border-gray-800 rounded-sm shadow-[-10px_10px_0px_0px_rgba(160,174,192)]">
            <div className="font-bold text-xl mb-4 text-white ">Physical</div>
            <div className="flex">
              <div className="text-lg text-white">XP : </div>
              <div className="text-lg text-white">{data.base_experience}</div>
            </div>
            <div className="flex">
              <div className="text-lg text-white">Height : </div>
              <div className="text-lg text-white">{data.height}</div>
            </div>
            <div className="flex">
              <div className="text-lg text-white">Weight : </div>
              <div className="text-lg text-white">{data.weight}</div>
            </div>
            <div className="flex">
              <div className="text-lg text-white">Order : </div>
              <div className="text-lg text-white">{data.order}</div>
            </div>
          </div>
        </div>
        <RotatingSprite />
      </div>
    </div>
  );
};

export default PokemonDetails;

export const pokemonDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = await response.json();
  return result;
};
