import React from "react";

const About = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-s12'>
          <h1>Welcome to Pokedex</h1>
          <label>
            {" "}
            A mini-encyclopedia of Pokémon species, types and moves dictated by the National Pokédex
            from the video game series Pokemon. Thanks to <strong>PokeAPI</strong> and{" "}
            <strong>Bulbapedia </strong>
            for the Pokémon data.
          </label>
        </div>
      </div>
    </div>
  );
};

export default About;
