import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Pokemon extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.pokemon.name }</p>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default Pokemon
