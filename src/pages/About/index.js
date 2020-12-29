import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ABOUT PAGE
          <Link to="/">Ir para a página HOME \o/</Link>
        </p>
      </header>
    </div>
  );
}

export default About;
