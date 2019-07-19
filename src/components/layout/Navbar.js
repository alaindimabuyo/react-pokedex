import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PokemonContext from "../../context/PokemonContext";

const Navbar = () => {
  const pokemonContext = useContext(PokemonContext);
  const { clearState } = pokemonContext;

  return (
    <nav className='navbar bg-dark'>
      <Link onClick={clearState} to='/'>
        Pokemon
      </Link>

      <ul>
        <li>
          <Link onClick={clearState} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/items'>Items</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
