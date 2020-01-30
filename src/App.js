import React from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage'

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {

  //   }
  // }
  render(){
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
