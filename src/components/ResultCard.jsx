import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ResultCard = ({ result }) => {
  return (
    <>
      <Link to={`/${result.id}`}>
        <div className="w-96 border-2 border-gray-800 border-opacity-70 rounded-md bg-gray-200">
          <div className="bg-orange-400 h-40 rounded-b-full">
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
                  className="bg-orange-400 rounded-full text-center border-2 border-gray-600 text-white px-5  font-bold text-sm basis-5/12"
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
                  className="bg-orange-400 rounded-full text-center border-2 border-gray-600 text-white px-5  font-bold text-sm basis-5/12"
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
