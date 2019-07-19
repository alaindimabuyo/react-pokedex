import React, { Fragment, useContext, useEffect } from "react";
import PokemonContext from "../../context/PokemonContext";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import PokemonChart from "./PokemonChart";
import Spinner from "../layout/Loading";

const PokemonItem = ({ match }) => {
  const pokemonContext = useContext(PokemonContext);

  const { pokemon, getCurrentPokemon, flatten, loading } = pokemonContext;

  useEffect(() => {
    getCurrentPokemon(match.params.id);

    // eslint-disable-next-line
  }, []);
  const types = flatten(pokemon.types);
  const ability = flatten(pokemon.abilities);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col xs lg='2'>
              <PokemonImage src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt='' />
            </Col>
            <Col>
              <TextWrap>{pokemon.name}</TextWrap>{" "}
              {types.item_1_type_name ? (
                <TypeWrap>
                  {types.item_1_type_name}/{types.item_0_type_name} Type Pokemon
                </TypeWrap>
              ) : (
                <TypeWrap>{types.item_0_type_name} Type Pokemon</TypeWrap>
              )}
              <PokemonChart pokemon={pokemon} /> <br />
              {ability.item_0_ability_name ? (
                <TypeWrap>
                  Skill: <span>{ability.item_1_ability_name}</span> <hr />
                  Hidden Ability: <span>{ability.item_0_ability_name}</span>
                </TypeWrap>
              ) : (
                <TypeWrap>
                  Ability: <span>{ability.item_1_ability_name}</span>
                </TypeWrap>
              )}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
};

let PokemonImage = styled.img`
  width: 100%;
  height: auto;
`;

let TextWrap = styled.h4`
  text-transform: uppercase;
  font-size: 3 em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 5px;
  color: black;
`;
let TypeWrap = styled.h6`
  text-transform: uppercase;
  font-size: 1 em;
  font-weight: light;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 1px;
  color: black;
`;

export default PokemonItem;
