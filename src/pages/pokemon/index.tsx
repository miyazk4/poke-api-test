import React, { useState } from "react";
import "./pokemon.scss";
import PokemonList from "./pokemonList";
import axios from "axios";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
    setPokemon(res.data.results.map((p: any) => p.name));
  });

  return (
    <div>
      <h1>Future Poke Api</h1>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}
