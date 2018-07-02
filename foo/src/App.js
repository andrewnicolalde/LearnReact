import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from "./components/Checkbox";
import Movie from "./components/Movie";
import Example from "./components/Example";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Comment>Rampart was such a failure.</Comment>
        <Comment>Mimi is the best!</Comment>
        <Comment>I'm going to Portugal!</Comment>
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

export default App;
