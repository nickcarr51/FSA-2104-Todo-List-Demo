import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h1>ToDos</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/complete'>Complete</Link>
      </nav>
    </header>
  )
}

export default Navbar;