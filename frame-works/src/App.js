
import './App.css';
import Card from './components/Card/demoCard';
import NavBar from './components/Navbar/NavBar';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
         <NavBar />
      <Container>
        <Row>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block h-50"
          src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdhcmRlbmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-50"
          src="https://images.unsplash.com/photo-1592863690346-6b28b8effea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmRlbmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-50"
          src="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVuaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Row>
       <Row>
        <Col className='mt-3'><Card /></Col>
        <Col className='mt-3'><Card /></Col>
        <Col className='mt-3'><Card /></Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
