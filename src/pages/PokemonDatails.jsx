import { useLoaderData, useParams } from "react-router-dom";

const PokemonDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>Hello Makichu</div>;
};

export default PokemonDetails;

export const pokemonDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = await response.json();
  return result;
};
