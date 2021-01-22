import React, { Component } from 'react';
import axios from 'axios';
// import { withRouter} from "react-router-dom";
import {Redirect} from 'react-router-dom';


class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
        // need to bind 'this' if we need to use with handleClick___() function. refer behaviour of this in JS 
        this.handleClickHai = this.handleClickHai.bind(this);
        this.handleClickHello = this.handleClickHello.bind(this);
    }
    handleClickHai(){
        this.setState(state => ({
            value: 'Hai'
        }));

    
        axios.get('/setvalue?value=Hi')
            .then( function (response){ //used older syntaxes because I didnt very any script by running for errors. Any type can be used.
                console.log(response)
            })
            .catch(function (error) {
                console.log(error) // any other error handling can be made.
            });

    }
      
    handleClickHello(){
        
        
        this.setState(state => ({
            value: 'Hello'
        }));
        // this.props.history.push('/main.html');

            
        axios.get('/setvalue?value=Hello')
            .then( function (response){ //used older syntaxes because I didnt very any script by running for errors. Any type can be used.
                console.log(response)
            })
            .catch(function (error) {
                console.log(error) // any other error handling can be made.
            });

       return  <Redirect  to="/main.html" />   


    }
  
   
    
    //removed the inline setState and added 2 handleClick  functions for each button (as they are part of same components).
  render() {
    return (
      <div className="greet" >
        
        <div className="hello" onClick={this.handleClickHello} >    
          <h4>Hello</h4>
        </div>

        <div className="hi" onClick={this.handleClickHai}>
            <h4>Hi</h4>
        </div>
    </div>

      
    );
  }
}

export default Tweet;