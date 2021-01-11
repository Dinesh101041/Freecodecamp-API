import React from "react";
import { BiBrain } from "react-icons/bi";
import {Row,Container,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <BiBrain/>
            <p>Artificial Intelligence</p>
          </Col>
          <Col>
            <BiBrain/>
            <p>Artificial Intelligence</p>`
          </Col>
          <Col>
            <BiBrain/>
            <p>Artificial Intelligence</p>`
          </Col>
          <Col>
            <BiBrain/>
            <p>Artificial Intelligence</p>`
          </Col>
          
        </Row>
      </Container>
      

     
    </div>
  
   
  );
}


export default App;
