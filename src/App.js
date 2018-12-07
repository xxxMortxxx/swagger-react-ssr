import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Swagger from './components/Swagger';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Swagger />
      </div>
    );
  }
}

export default App;
