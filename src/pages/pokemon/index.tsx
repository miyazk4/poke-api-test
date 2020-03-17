import React, { useState, useEffect } from "react";
import "./pokemon.scss";
import PokemonList from "./pokemonList";
import Pagination from "./pokemonPagination";
import axios from "axios";

/*
  export interface PokeState {
  setCurrentPage: () => void;
  setPrevPage: () => void;
  setNextPage: () => void;
  setLoading: () => boolean;
} */

export default function Pokemon() {
  // componente n pode retornar pokestate
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevPage, setPrevPage] = useState(""); // assim sabe q contem string
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(true); // por default a aplicação está a carregar

  useEffect(() => {
    setLoading(true); // Antes do request é true
    let cancel: any;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken(c => (cancel = c))
      })
      .then(res => {
        setLoading(false); // Depois do request é false
        setPrevPage(res.data.previous); // recebe o prev e next do poke api
        setNextPage(res.data.next);
        setPokemon(res.data.results.map((p: any) => p.name));
      });

    // Cancelar previous request quando fazemos um novo request, ou seja, fazer com q a nossa app
    // não carregue data antiga em caso de um old request terminar depois de um new request
    return () => cancel();
  }, [currentPage]); // Adicionamos o currentPage pq sempre q ele muda nós queremos correr este codigo again

  function goToPreviousPage() {
    setCurrentPage(prevPage);
  }

  function goToNextPage() {
    setCurrentPage(nextPage);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Future Poke Api</h1>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToPreviousPage={prevPage ? goToPreviousPage : null} // Se tiver prev page passa prev page se n tiver passa null
        goToNextPage={nextPage ? goToNextPage : null}
      />
    </div>
  );
}
