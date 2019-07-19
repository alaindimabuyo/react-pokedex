import React from "react";
import Home from "./components/pages/Home";
import Items from "./components/pages/Items";
import About from "./components/pages/About";
import PokemonState from "./context/PokemonState";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CurrentPokemon from "./components/pokemon/CurrentPokemon";

function App() {
  return (
    <PokemonState>
      <Router>
        <div className='App '>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/items' component={Items} />
            <Route exact path='/about' component={About} />
            <Route exact path='/pokemon/:id' component={CurrentPokemon} />
          </Switch>
        </div>
      </Router>
    </PokemonState>
  );
}

export default App;
