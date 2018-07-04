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
        <Comment>Star Wars was once good</Comment>
        <Comment>Mimi is the best!</Comment>
        <Comment>I'm going to Portugal!</Comment>
      </div>
    );
  }
}

class Comment extends Component {

  constructor(){
    super();
    this.state = {
      editing: false
    };
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  render(){
    if(this.state.editing){
      return(this.renderEditing());
    } else{
      return(this.renderNormal());
    }
  }

  renderNormal(){
    return(
    <div className={"commentContainer"}>
      {this.props.children}
      <button onClick={this.edit}>Edit</button>
      <button onClick={this.remove}>Remove</button>
    </div>
    );
  }

  renderEditing(){
    return(
      <div className={"commentContainer"}>
        <textarea defaultValue={this.props.children} ref={"userText"}></textarea>
        <button onClick={this.save}>Save</button>
      </div>
    );
  }

  /**
   * This gets called when the user presses the edit button. Turns the text into an editable text field.
   */
  edit(){
    this.setState({editing: true});
  }

  /**
   * This gets called when the user presses the save button. It turns the contents of the text field into a non-changeable
   * piece of text.
   */
  save(){
    var usertext = this.refs.userText.value;
    console.log("New comment: "+ usertext);
    this.setState({editing: false});
  }

  /**
   * This gets called when the user presses the remove button. It deletes the entire commentContainer div.
   * @param e The actual remove button. We remove the entire section by removing its parent, which is the commentContainer.
   */
  remove(e){
    e.target.parentElement.remove();
  }

}

export default App;
