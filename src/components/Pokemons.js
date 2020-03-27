import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokemons extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ));
  }
}

Pokemons.propTypes = {
  pokemons: PropTypes.array.isRequired
}

export default Pokemons;
