
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
function SideNav(props) {
  return (
    <Container fluid style={{ height: '100vh' }} >
    <Row style={{ height: '100vh'}}>
      <Col sm={4} md={2} className="sidenav">
        <p className="nav-option">Home</p>
        <p className="nav-option">vechicles</p>
        <p className="nav-option">Map</p>
        <p className="nav-option">About</p>
      </Col>
      <Col sm={8} md={10} className="main-container">
        {props.children}
      </Col>
    </Row>
    </Container>
  );
}

export default SideNav;
