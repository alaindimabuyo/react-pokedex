import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import PokemonContext from "../../context/PokemonContext";

const PokemonChart = pokemon => {
  const pokemonContext = useContext(PokemonContext);

  const { flatten } = pokemonContext;

  const stats = flatten(pokemon.pokemon.stats);

  const data = {
    datasets: [
      {
        label: "Data",
        backgroundColor: "rgb(200,230,201)",
        borderColor: "rgb(165,214,167)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(102,187,106)",
        hoverBorderColor: "rgb(76,175,80)",
        data: [
          pokemon.pokemon.base_experience,
          pokemon.pokemon.weight,
          pokemon.pokemon.height,
          stats.item_5_base_stat,
          stats.item_4_base_stat,
          stats.item_3_base_stat
        ]
      }
    ],
    labels: ["Base Experience", "Weight", "Height", "HP", "Attack", "Defense"]
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default PokemonChart;
