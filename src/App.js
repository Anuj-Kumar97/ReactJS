import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HelloComponent} from './components/hello.js';
import {AlertComponent} from './components/box.js';
import {LoginComponent} from './components/login_form.js';
import {LifeComponent} from './components/life_cycle.js';
import {ProductForm} from './components/product_form.js';
import {ProductTable} from './components/product_table.js';
import {ProductApp} from './components/productApp.js';

function App(){
   return (<ProductApp />)
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/