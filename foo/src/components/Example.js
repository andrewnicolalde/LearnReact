import React, {Component} from "react";

class Example extends Component {
  render() {
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

export default Example;