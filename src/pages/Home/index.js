import logo from '../../logo.svg';
import '../../App.css';

import SideNav from '../../templates/sideNav/'

import { Link } from 'react-router-dom'

function Home() {
  return (
      <SideNav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
        <p>
        <Link to="/about">Ir para a página sobre \o/</Link>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </SideNav>

  );
}

export default Home;
