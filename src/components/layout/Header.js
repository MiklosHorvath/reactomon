import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>PokemonApp</h1>
      <Link to="/">Home</Link> | <Link
      to="/typelist">TypeList</Link>
    </header>
  )
}

export default Header;
