import React, { Component } from 'react';
// import './App.css';

// import Swagger from './components/Swagger';
// import CustomSwagger from './components/MySwagger';

class App extends Component {
  clickHandler() {
    console.log('click')
  }

  render() {
    return (
      <div className="App">
        {/*<CustomSwagger/>*/}
        {/*<Swagger />*/}
        <h3>hello from app component</h3>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default App;
