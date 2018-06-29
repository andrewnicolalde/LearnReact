import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*Anything in braces gets evaluated as JavaScript, including this comment!*/}
        <Example/> {/*This self-closing tag is how we tell React to put an "Example" component here.*/}
        <Movie title={"Star Wars"} genre={"Sci-Fi"}/>
        <Movie title={"Rampart"} genre={"Clusterfuck"}/>
        <Movie title={"Coco"} genre={"Disney"}/>
      </div>
    );
  }
}

{/*
This is our first component!
*/}
class Example extends Component {
  render(){
    return (
      <div> {/*This is our top level tag. We cannot have more than one.*/}
        This is what example returns! Example is a component.
        <ul> Everything seems to work fine if we:
          <li>have one top level tag for each component, including app.</li>
        </ul>
      </div>
    );
  }
}

{/*
This is to show us how properties work
*/}
class Movie extends Component {
  render(){
    return(
      <div>
        <h1>Movie name: {this.props.title}</h1>
        <h1>Genre: {this.props.genre}</h1>
      </div>
    );
  }
}

export default App;
