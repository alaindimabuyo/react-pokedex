import React, { Fragment, useContext, useEffect, useState } from "react";
import PokemonContext from "../../context/PokemonContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PokemonEntries = () => {
  const pokemonContext = useContext(PokemonContext);

  const { pokemons, getPokemon } = pokemonContext;

  const [search, setSearch] = useState("");

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, []);

  const SearchOnChange = e => {
    setSearch(e.target.value);
  };
  //filter search
  const filteredPokemon = pokemons.filter(pokemon => {
    return pokemon.pokemon_species.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <Fragment>
      <div className='container '>
        <CenterDiv className='row'>
          <input
            className='form-control'
            type='text'
            onChange={SearchOnChange}
            placeholder='Search for Pokemon'
          />

          <div className='grid-4'>
            {filteredPokemon.map(name => (
              <div className='card' key={name.entry_number}>
                <div className='col-s10'>
                  <Link to={`/pokemon/${name.entry_number}`}>
                    <PokemonImage
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        name.entry_number
                      }.png`}
                      alt='pokemon'
                    />
                  </Link>

                  <TextWrap>{name.pokemon_species.name}</TextWrap>
                </div>
              </div>
            ))}
          </div>
        </CenterDiv>
      </div>
    </Fragment>
  );
};

let PokemonImage = styled.img`
  width: 60%;
  height: auto;

  &:hover {
    transform: translate(0, -5px);
    cursor: pointer;
  }
`;

let CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

let TextWrap = styled.h4`
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 5px;
  color: black;
`;

export default PokemonEntries;
