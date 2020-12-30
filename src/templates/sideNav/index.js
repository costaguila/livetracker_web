
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
function SideNav(props) {
  return (
    <Container fluid style={{ height: '100vh'}}>
    <Row style={{ height: '100vh'}}>
      <Col sm={4} md={2}  style={{backgroundColor: 'black'}}>
      </Col>
      <Col sm={8} md={10} style={{backgroundColor: 'red'}}>
        {props.children}
      </Col>
    </Row>
    </Container>
  );
}

export default SideNav;
