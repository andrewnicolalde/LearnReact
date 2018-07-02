import React, {Component} from "react";

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>Movie name: {this.props.title}</h1>
        <h1>Genre: {this.props.genre}</h1>
      </div>
    );
  }
}

export default Movie;