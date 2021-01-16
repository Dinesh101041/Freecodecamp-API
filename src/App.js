import React from "react";
import { BiBrain } from "react-icons/bi";
//  import {Row,Container,Col} from "react-bootstrap";
//  import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App" >
      <div className="first">
        
        <div className="hello" onClick={e => console.log("Clicked")}>
          <BiBrain></BiBrain>
          <h4>Artifical Intelligence</h4>
        </div>

        <div className="hello">
          <BiBrain></BiBrain>
            <h4></h4>
        </div>
      </div>

      <div className="start">
        
        <div className="hello">
          <BiBrain></BiBrain>
            <h4>art</h4>
        </div>

        <div className="hello">
          <BiBrain></BiBrain>
            <h4>art</h4>
        </div>
      </div>



    </div>
  
   
  );
}


export default App;
