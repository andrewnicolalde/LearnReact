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
        <Board/>
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
    this.remove = this.remove.bind(this);
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
    this.props.updateCommentText(usertext, this.props.index);
    this.setState({editing: false});
  }

  /**
   * This gets called when the user presses the remove button. It removes the comment.
   */
  remove(){
    this.props.deleteFromBoard(this.props.index);
  }

}

class Board extends Component{
  constructor(){
    super();
    this.state = {
      comments: [
      ]
    }
    this.removeComment = this.removeComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.createNewComment = this.createNewComment.bind(this);
    this.forEachComment = this.forEachComment.bind(this);
  }

  render(){
    return(
      <div>
        <button onClick={this.createNewComment.bind(null, "Bacon tuna")}>New Note</button>
        <div className={"boardContainer"}>
          {
            this.state.comments.map(this.forEachComment)
          }
        </div>
      </div>
    );
  }

  /**
   * This is a function called for each comment in the array "comments" in the state of each board.
   * @param text
   * @param i
   * @returns {*}
   */
  forEachComment(text, i) {
    return (
      <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>{text}</Comment>
    );
  }

  createNewComment(text){
    var commentArray = this.state.comments;
    commentArray.push(text);
    this.setState({
      comments: commentArray
    });
  }

  removeComment(i){
    console.log("Removing comment " + i);
    var commentArray = this.state.comments;
    commentArray.splice(i, 1);
    this.setState({
      comments: commentArray
    });
  }

  updateComment(newText, i){
    console.log("Updating comment: " + i);
    var commentArray = this.state.comments;
    commentArray[i] = newText;
    this.setState({
      comments: commentArray
    });
  }

}

export default App;
