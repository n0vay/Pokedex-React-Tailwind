import { useLoaderData } from "react-router-dom";
import RotatingSprite from "../components/Sprite";
import backgroundImage from "../assets/images/details_background.jpg";
import pokeball from "../assets/images/pokeball.png";

const PokemonDetails = () => {
  const data = useLoaderData();

  const type = data.types[0].type.name;
  let bgcolor = "bg-gray-200";
  let border = "border-gray-200";
  let fromcolor = "from-gray-200";
  switch (type) {
    case "grass":
      bgcolor = "bg-grass";
      border = "border-grass";
      fromcolor = "from-grass";
      break;
    case "fire":
      bgcolor = "bg-fire";
      border = "border-fire";
      fromcolor = "from-fire";
      break;
    case "water":
      bgcolor = "bg-water";
      border = "border-water";
      fromcolor = "from-water";
      break;
    case "bug":
      bgcolor = "bg-bug";
      border = "border-bug";
      fromcolor = "from-bug";
      break;
    case "normal":
      bgcolor = "bg-normal";
      border = "border-normal";
      fromcolor = "from-normal";
      break;
    case "poison":
      bgcolor = "bg-poison";
      border = "border-poison";
      fromcolor = "from-poison";
      break;
    case "electric":
      bgcolor = "bg-electric";
      border = "border-electric";
      fromcolor = "from-electric";
      break;
    case "ground":
      bgcolor = "bg-ground";
      border = "border-ground";
      fromcolor = "from-ground";
      break;
    case "fairy":
      bgcolor = "bg-fairy";
      border = "border-fairy";
      fromcolor = "from-fairy";
      break;
    case "fighting":
      bgcolor = "bg-fighting";
      border = "border-fighting";
      fromcolor = "from-fighting";
      break;
    case "psychic":
      bgcolor = "bg-psychic";
      border = "border-psychic";
      fromcolor = "from-psychic";
      break;
    case "rock":
      bgcolor = "bg-rock";
      border = "border-rock";
      fromcolor = "from-rock";
      break;
    case "ghost":
      bgcolor = "bg-ghost";
      border = "border-ghost";
      fromcolor = "from-ghost";
      break;
    case "ice":
      bgcolor = "bg-ice";
      border = "border-ice";
      fromcolor = "from-ice";
      break;
    case "dragon":
      bgcolor = "bg-dragon";
      border = "border-dragon";
      fromcolor = "from-dragon";
      break;
    case "dark":
      bgcolor = "bg-dark";
      border = "border-dark";
      fromcolor = "from-dark";
      break;
    case "steel":
      bgcolor = "bg-steel";
      border = "border-steel";
      fromcolor = "from-steel";
      break;
    case "flying":
      bgcolor = "bg-flying";
      border = "border-flying";
      fromcolor = "from-flying";
      break;
    default:
      bgcolor = "bg-gray-200";
      border = "border-gray-400";
      fromcolor = "from-gray-200";
      break;
  }

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
        <div
          className={`font-bold text-4xl ${bgcolor} px-5 py-2 border-x-2 border-y-4 border-gray-800 rounded-t-md`}
        >
          Pokédex Data
        </div>
        <div className="flex mt-6 ">
          <div className="basis-1/3">
            <div className="flex justify-center gap-3">
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
              <div
                className={`${border} font-bold flex flex-col justify-start text-xl rounded-md border-4 px-8 py-2 mb-2`}
              >
                Type
                {data.types.map((type) => (
                  <div
                    key={type.type.name}
                    className={`${bgcolor} flex rounded-md text-center text-white px-6 py-1 font-bold text-3xl mt-2`}
                  >
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className={`${border} font-bold flex flex-col justify-start text-xl rounded-md border-4 px-8 py-2 mb-2`}
              >
                Ability
                {data.abilities.map((ability) => (
                  <div
                    key={ability.ability.name}
                    className={`${bgcolor} flex rounded-md text-center text-white px-6 py-1 font-bold text-3xl mt-2`}
                  >
                    {ability.ability.name.charAt(0).toUpperCase() +
                      ability.ability.name.slice(1)}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <table
                  class={`table-auto ${border} font-bold flex flex-col text-xl rounded-md border-4 px-8 py-2 mb-2`}
                >
                  <thead>
                    <tr>
                      <th>Physical</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 px-2 font-bold text-3xl">
                    <tr>
                      <td>XP :</td>
                      <td>{data.base_experience}</td>
                    </tr>
                    <tr>
                      <td>Height :</td>
                      <td>{data.height}</td>
                    </tr>
                    <tr>
                      <td>Order :</td>
                      <td>{data.order}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className={`rounded-full ${border} border-y-8`}>
              <div className="border-8 border-white-200 rounded-full">
                <div className={`rounded-full ${border} border-x-8`}>
                  <div className="border-8  border-white-200 rounded-full">
                    <div
                      className={`rounded-full bg-gradient-to-t ${fromcolor} to-gray-200 bg-gray-300`}
                    >
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
            <div className="flex justify-center mt-7">
              <table
                class={`table-auto ${border} font-bold flex flex-col text-xl rounded-md border-4 px-8 py-2 mb-2`}
              >
                <thead>
                  <tr>
                    <th>Stats</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 px-2 font-bold text-3xl">
                  {data.stats.map((stat, index) => (
                    <tr key={index}>
                      <td>
                        {stat.stat.name.charAt(0).toUpperCase() +
                          stat.stat.name.slice(1)}{" "}
                        :
                      </td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
