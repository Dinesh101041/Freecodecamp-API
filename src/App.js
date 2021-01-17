import React, { Component } from 'react';
import Tweet from './Tweet'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Tweet/>
      </div>
    );
  }
}

export default App;