import React, { Component } from 'react';
import './App.css';
import handwrittenName from './img/acnsig_sm.png';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="header-menu">
          <div className="burger-holder">
            <div className = "burger-bar"></div>
            <div className = "burger-bar"></div>
            <div className = "burger-bar"></div>
          </div>
        </header>

        <div className="content">
        
          <div className="name-and-link-holder">
            <img height="800px" alt="handwritten-name" className="handwritten-name" src={ handwrittenName } />
          </div>
        </div>

        <div className="menu">
            <ul>
            <li><a href="#">CV</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </div>

      </div>
    );
  }
}

export default App;
