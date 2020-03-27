import React, { Component } from 'react';

export class Pokemon extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.pokemon.name }</p>
      </div>
    )
  }
}

export default Pokemon
