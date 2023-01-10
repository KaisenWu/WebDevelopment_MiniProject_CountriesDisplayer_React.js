import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <h1>Awesome Country Data</h1>
      <br></br>
      <button><Link to="/all">All</Link></button>
      <button><Link to="/africa">Africa</Link></button>
      <button><Link to="/Americas">Americas</Link></button>
      <button><Link to="/Asia">Asia</Link></button>
      <button><Link to="/Europe">Europe</Link></button>
      <button><Link to="/Oceania">Oceania</Link></button>
      <br></br>
      <p>Number of Countries: {props.countries}</p>
    </header>
  );
}


