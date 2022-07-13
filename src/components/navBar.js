import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';

function Navbar() {
  return (
    <NavBar>
      <h1>Math Magicians</h1>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </Nav>
    </NavBar>
  );
}

const NavBar = style.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10% 0 5%;
background-color: #c7eeff;
`;

const Nav = style.div`
  width: 240px;
  display: flex;
  justify-content: space-around;

  & 
  a {
    text-decoration: none;
    color: #000;
  }
  `;

export default Navbar;
