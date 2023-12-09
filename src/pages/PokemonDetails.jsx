import { useLoaderData } from "react-router-dom";
import RotatingSprite from "../components/Sprite";
import backgroundImage from "../assets/images/details_background.jpg";
import pokeball from "../assets/images/pokeball.png";
const PokemonDetails = () => {
  const data = useLoaderData();

  //const sprites = [data.sprites.front_default, data.sprites.back_default];

  return (
    <div
      className="pt-5 gap-8  bg-scroll"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply", // Use camelCase for CSS properties
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value to control the grayish background
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <div className=" bg-gray-200 rounded-md w-2/3">
        <div className="font-bold text-4xl bg-red-500 px-5 py-2 border-x-2 border-y-4 border-gray-800 rounded-t-md">
          Pokédex Data
        </div>
        <div className="flex mt-6">
          <div className="basis-1/3">
            <div className="flex justify-end gap-3 pr-10 pl-5">
              
              <div
                className="w-24"
                style={{
                  backgroundImage: `url(${pokeball})`,
                  backgroundSize: "cover",
                }}
              />

              <div className="font-bold text-6xl mt-10 ">
                {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              </div>
            </div>
            <div className="flex justify-center mt-7">
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
            <div className="flex justify-center">
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
            <div>
              <div className="border-2 bg-gray-800 p-5 ml-10 border-gray-800 rounded-sm shadow-[-10px_10px_0px_0px_rgba(160,174,192)]">
                <div className="font-bold text-xl mb-4 text-white ">
                  Physical
                </div>
                <div className="flex">
                  <div className="text-lg text-white">XP : </div>
                  <div className="text-lg text-white">
                    {data.base_experience}
                  </div>
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
          </div>
          <div className="basis-1/3">
            <div className="border-y-8 border-red-500 rounded-full">
              <div className="border-8 border-white-200 rounded-full">
                <div className="border-x-8 border-red-500 rounded-full">
                  <div className="border-8  border-white-200 rounded-full">
                    <div className="rounded-full bg-gradient-to-t from-red-300 to-gray-200 bg-gray-300">
                      <img
                        className="scale-125 p-10"
                        src={
                          data.sprites.other["official-artwork"].front_default
                        }
                        alt="Booticamp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
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
        </div>
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
