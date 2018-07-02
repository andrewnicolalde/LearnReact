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
        {/*Anything in braces gets evaluated as JavaScript, including this comment!
        <Example/> This self-closing tag is how we tell React to put an "Example" component here.
        <Movie title={"Star Wars"} genre={"Sci-Fi"}/>
        <Movie title={"Rampart"} genre={"Clusterfuck"}/>
        <Movie title={"Coco"} genre={"Disney"}/>
        <Comment>Rampart was such a failure.</Comment>
        <Comment>Mimi is the best!</Comment>
        <Comment>I'm going to Portugal!</Comment>*/}
        <Checkbox/>
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
This is to show us how properties work.
Note that properties are immutable.
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

class Comment extends Component {
  render(){
    return(
      <div className={"commentContainer"}>
        {this.props.children}
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  }

  edit(){
    alert("You are now editing the comment");
  }

  remove(e){
    e.target.parentElement.remove();
  }

}

{/*
Here we learn about states. We use these when a part of a component changes over time in some way.
*/}
class Checkbox extends React.Component {

  constructor() {
    super();
    this.state = {
      checked: true
    };
    this.handleCheckClick = this.handleCheckClick.bind(this);
  }

  render() {
    var msg;
    {/*Text that shows up on the screen telling the user if the box is checked or unchecked*/
    }
    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }
    return (
      <div>
        <input type={"checkbox"} defaultChecked={this.state.checked} onChange={this.handleCheckClick}/>
        <h1>Box is {msg}</h1>
      </div>
    );
  }

  handleCheckClick() {
    this.setState({checked: !this.state.checked});
  }
}


export default App;
