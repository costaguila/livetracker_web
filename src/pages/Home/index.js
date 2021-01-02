import { Link } from 'react-router-dom'

import logo from '../../logo.svg';
import '../../App.css';

import SideNav from '../../templates/sideNav/'

import Row from 'react-bootstrap/Row'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

function Home() {
  return (
      <SideNav>
      <Row style={{ width: "100%", height: "70%", paddingTop: '2em', paddingLeft:'2em' }}>
        <MapContainer
        center={[-19.58401, -44.115399]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </Row>
      </SideNav>

  );
}

export default Home;
