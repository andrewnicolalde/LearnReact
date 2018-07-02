import React, {Component} from "react";

{/*
Here we learn about states. We use these when a part of a component changes over time in some way.
*/}
class Checkbox extends Component {

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

export default Checkbox;