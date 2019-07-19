import React, { Fragment, useContext, useEffect } from "react";
import PokemonContext from "../../context/PokemonContext";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Spinner from "../layout/Loading";

const CurrentItem = ({ match }) => {
  const pokemonContext = useContext(PokemonContext);

  const { item, getCurrentItem, flatten, loading } = pokemonContext;

  useEffect(() => {
    getCurrentItem(match.params.id);

    // eslint-disable-next-line
  }, []);

  const image = flatten(item.sprites);
  const attr = flatten(item.attributes);
  const description = flatten(item.flavor_text_entries);
  console.log(item);

  //capital first letter
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col xs lg='12' className='text-center p-3'>
              <PokemonImage src={image.item_default} alt='' />
              <TextWrap>{item.name}</TextWrap>
              <h6>{description.item_2_text}</h6>
            </Col>
            {attr.item_0_name ? (
              <Col>
                <h4>Attributes:</h4>
                {item.attributes &&
                  item.attributes.map(a => <p key={a.url}>{Capitalize(a.name)}</p>)}
              </Col>
            ) : (
              ""
            )}

            <Col>
              <h4>Effect:</h4>
              {item.effect_entries &&
                item.effect_entries.map(a => <p key={a.effect}>{a.effect}</p>)}
            </Col>
            <Col>
              <h4>Short Effect:</h4>
              {item.effect_entries &&
                item.effect_entries.map(a => <p key={a.short_effect}>{a.short_effect}</p>)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
};

let PokemonImage = styled.img`
  width: 5%;
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

export default CurrentItem;
