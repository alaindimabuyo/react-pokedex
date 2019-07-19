import {
  GET_POKEMON,
  GET_CURRENT_POKEMON,
  CLEAR_STATE,
  GET_ITEMS,
  SET_LOADING,
  GET_CURRENT_ITEM,
  CLEAR_ITEM
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case GET_CURRENT_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      };
    case GET_CURRENT_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    case CLEAR_STATE:
      return {
        ...state,
        pokemon: {},
        item: {}
      };
    case CLEAR_ITEM:
      return {
        ...state,
        item: {}
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return false;
  }
};
