import { PropTypes } from "prop-types";

const ResultCard = ({ result }) => {
  return (
    <>
      {/* <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className=" relative space-y-2">
            <div className="flex flex-row content-between">
              <div className="rounded p-2 shadow">{result.name}</div>
              <div className="rounded p-2 shadow">HP: {result.hp}</div>
            </div>
            <div className="py-10">
              <img src={result.image} className="h-30" alt="Tailwind Play" />
            </div>
            <div className="rounded p-2 shadow">Height: {result.height}</div>
            <div className="rounded p-2 shadow">Weight: {result.weight}</div>
          </div>
          <div className="flex flex-row">
            <div className="rounded p-2 shadow basis-1/2">Types:
            {result.types.map((type) => (<p key={type.type.name}>{type.type.name}</p>))}
            </div>
            <div className="rounded p-2 shadow basis-1/2">Abilities: 
            {result.abilities.map((ability) => (<p key = {ability.ability.name}>{ability.ability.name}</p>))}
            </div>
          </div>
        </div> */}

      <div className="w-80 border-2 border-black rounded-md">
        <div className="bg-orange-400 h-40 rounded-b-full">
          <div className="p-2 px-4">
            <div className="flex flex-row justify-end">
              <div className="bg-white rounded-full text-center mt-2 px-3 py-1">
                HP 45
              </div>
            </div>
            <div className=" h-40 w-40 m-auto">
            <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'} className="h-30" alt="Tailwind Play" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="text-center font-bold p-4 mt-14 text-2xl">
            Name of Pokemon
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="bg-orange-400 rounded-full text-center py-2 text-white px-5 mx-auto font-bold text-sm">
              type
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex">
            <div className="flex-grow ">
              <div className="p-2 text-center text-xl">
                <p className="font-bold">52</p>
                Attack
              </div>
            </div>
            <div className="flex-grow ">
              <div className="p-2 text-center text-xl">
                <p className="font-bold">52</p>
                Attack
              </div>
            </div>
            <div className="flex-grow ">
              <div className="p-2 text-center text-xl">
                <p className="font-bold">52</p>
                Attack
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-grow ">
              <div className="p-2 text-center text-xl">
                <p className="font-bold">52</p>
                Attack
              </div>
            </div>
            <div className="flex-grow ">
              <div className="p-2 text-center text-xl">
                <p className="font-bold">52</p>
                Attack
              </div>
            </div>
            <div className="flex-grow ">
              <div className="p-2 text-center text-xl">
                <p className="font-bold">52</p>
                Attack
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ResultCard.propTypes = {
  result: PropTypes.any,
};

export default ResultCard;
