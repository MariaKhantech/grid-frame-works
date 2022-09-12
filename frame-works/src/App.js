
import './App.css';
import React from 'react';
import Card from './components/Card/demoCard';
import NavBar from './components/Navbar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselSlide from './components/CarouselSlide/CarouselSlide';


function App() {
  return (
    <div className="App">
         <NavBar />
      <Container className='mt-5'>
      <CarouselSlide />
       <Row className='mt-5'>
        <Col><Card /></Col>
        <Col><Card /></Col>
        <Col><Card /></Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
