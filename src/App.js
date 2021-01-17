import React from "react";
import { BiBitcoin } from "react-icons/bi";
import { FaBrain,FaCogs } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiFillAndroid,AiFillCloud ,AiFillDatabase} from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";
//  import {Row,Container,Col} from "react-bootstrap";
//  import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App" >
      <div className="first">
        
        <div className="hello" onClick={e => console.log("Clicked")}>
          <FaBrain></FaBrain>
          <h4>Artifical Intelligence</h4>
        </div>

        <div className="hello" onClick={e => console.log("Clicked")}>
          <AiFillAndroid></AiFillAndroid>
            <h4>Android</h4>
        </div>

        <div className="hello" onClick={e => console.log("Clicked")}>
          <AiFillDatabase></AiFillDatabase>
          <h4>BigData</h4>
        </div>

        <div className="hello" onClick={e => console.log("Clicked")}>
          <BiBitcoin></BiBitcoin>
          <h4>BlockChain</h4>
        </div>

      </div>

      <div className="first">

        <div className="hello" onClick={e => console.log("Clicked")}>
          <AiFillCloud></AiFillCloud>
          <h4>Cloud</h4>
        </div>
        
        <div className="hello" onClick={e => console.log("Clicked")}>
          <BsFillShieldLockFill></BsFillShieldLockFill>
            <h4>Cyber Security</h4>
        </div>

        <div className="hello" onClick={e => console.log("Clicked")}>
          <FaCogs></FaCogs>
          <h4>Engineering</h4>
        </div>

        <div className="hello" onClick={e => console.log("Clicked")}>
          <IoHardwareChip></IoHardwareChip>
          <h4>Hardware</h4>
        </div>

      </div>


      <div className="first">

        <div className="hello" >
          <GrPersonalComputer></GrPersonalComputer>
          <h4>Information Tecnhology</h4>
        </div>

      </div>



    </div>
  
   
  );
}


export default App;
