import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ResultCard = ({ result }) => {

  const type = result.types[0].type.name;
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
      fromcolor = "from-gray-400";
      break;
  }

  return (
    <>
      <Link to={`/${result.id}`}>
        <div className="w-96 border-2 border-gray-800 border-opacity-70 rounded-md bg-gray-200">
          <div className={`${bgcolor} h-40 rounded-b-full`}>
            <div className="p-2 px-4">
              <div className="flex flex-row justify-end">
                <div className="bg-white rounded-full text-center mt-2 px-3 py-1">
                  HP {result.hp}
                </div>
              </div>
              <div className=" h-60 w-60 m-auto">
                {/* {JSON.stringify(result)} */}
                <img src={result.image} className="h-30" alt="Tailwind Play" />
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="text-center font-bold p-4 mt-24 text-3xl">
              {result.name.charAt(0).toUpperCase() + result.name.slice(1)}
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {result.types.map((type) => (
                <div
                  key={type.type.name}
                  className={`${bgcolor} rounded-full text-center border-2 border-gray-600 text-white px-5  font-bold text-sm basis-5/12`}
                >
                  {type.type.name}
                  <div className="text-xxs font-normal bg-gray-600 rounded-t-full px-2">
                    type
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-4">
              {result.abilities.map((ability) => (
                <div
                  key={ability.ability.name}
                  className={`${bgcolor} rounded-full text-center border-2 border-gray-600 text-white px-5  font-bold text-sm basis-5/12`}
                >
                  {ability.ability.name}
                  <div className="text-xxs font-normal bg-gray-600 rounded-t-full px-2">
                    ability
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex">
              <div className="flex-grow ">
                <div className="p-2 text-center text-xl">
                  <p className="font-bold">{result.stats[1].base_stat}</p>
                  {result.stats[1].stat.name}
                </div>
              </div>
              <div className="flex-grow ">
                <div className="p-2 text-center text-xl">
                  <p className="font-bold">{result.stats[2].base_stat}</p>
                  {result.stats[2].stat.name}
                </div>
              </div>
              <div className="flex-grow ">
                <div className="p-2 text-center text-xl">
                  <p className="font-bold">{result.height}</p>
                  height
                </div>
              </div>
              <div className="flex-grow ">
                <div className="p-2 text-center text-xl">
                  <p className="font-bold">{result.weight}</p>
                  weight
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow">
                <div className="p-2 text-center text-xl">
                  <p className="font-bold">{result.stats[3].base_stat}</p>
                  {result.stats[3].stat.name}
                </div>
              </div>
              <div className="flex-grow">
                <div className="p-2 text-center text-xl">
                  <p className="font-bold">{result.stats[4].base_stat}</p>
                  {result.stats[4].stat.name}
                </div>
              </div>
              <div className="flex-grow">
                <div className="p-2 text-center text-xl">
                  <p className="font-bold">{result.stats[5].base_stat}</p>
                  {result.stats[5].stat.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

ResultCard.propTypes = {
  result: PropTypes.any,
};

export default ResultCard;
