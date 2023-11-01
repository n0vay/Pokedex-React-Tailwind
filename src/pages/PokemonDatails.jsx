import { useLoaderData } from "react-router-dom";

const PokemonDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="p-5">
      <div className="bg-orange-400 p-10 rounded-md">
        <div className="font-bold text-4xl">Pokédex Data</div>
        <div className="font-bold text-3xl mb-4">{data.name}</div>
        <div className="flex">
          <div className="flex flex-row gap-2 font-bold text-xl bg-gray-800 rounded-md text-center border-2  border-gray-600 text-white px-2 py-1 mb-2">
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
          <div className=" flex flex-row gap-2 font-bold text-xl bg-gray-800 rounded-md text-center border-2  border-gray-600 text-white px-2 py-1">
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
