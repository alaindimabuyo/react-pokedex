import React, { useReducer } from "react";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";
import axios from "axios";
import { GET_POKEMON, GET_CURRENT_POKEMON, CLEAR_STATE, GET_ITEMS, SET_LOADING } from "./types";

const PokemonState = props => {
  const initialState = {
    pokemon: {},
    pokemons: [],
    items: [],
    item: {},
    loading: false
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  const clearState = () => {
    dispatch({ type: CLEAR_STATE });
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const getItems = async () => {
    setLoading();
    const res = await axios.get("https://pokeapi.co/api/v2/item?offset=0&limit=960");

    dispatch({ type: GET_ITEMS, payload: res.data.results });
  };

  const getPokemon = async () => {
    setLoading();
    const res = await axios.get("https://pokeapi.co/api/v2/pokedex/1/");

    dispatch({ type: GET_POKEMON, payload: res.data.pokemon_entries });
  };
  const getCurrentPokemon = async id => {
    setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    dispatch({ type: GET_CURRENT_POKEMON, payload: res.data });
  };

  const getValue = (currentKey, into, target) => {
    for (var i in into) {
      if (into.hasOwnProperty(i)) {
        let newKey = i;
        let newVal = into[i];

        if (currentKey.length > 0) {
          newKey = currentKey + "_" + i;
        }
        typeof newVal === "object" ? getValue(newKey, newVal, target) : (target[newKey] = newVal);
      }
    }
  };

  //flatten object
  const flatten = arr => {
    let newObj = {};
    getValue("item", arr, newObj);
    return newObj;
  };

  return (
    <PokemonContext.Provider
      value={{
        getPokemon,
        getCurrentPokemon,
        getItems,
        pokemons: state.pokemons,
        pokemon: state.pokemon,
        flatten,
        items: state.items,
        item: state.item,
        clearState,
        loading: state.loading
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
