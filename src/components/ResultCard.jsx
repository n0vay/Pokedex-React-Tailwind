import {PropTypes} from "prop-types"

const ResultCard = ({result}) => {
  return (
    <>
        <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
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
        </div>
      
    </>
  );
};


ResultCard.propTypes =  {
  result:PropTypes.any
}

export default ResultCard;
