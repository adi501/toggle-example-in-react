import React, { Component } from "react";

class ToggleExp1 extends Component {
  state = {
    showDiv: false
  };

  toggleDivHandler = () => {
    const doesShow = this.state.showDiv;

    this.setState({ showDiv: !doesShow });
  };

  render() {
    let divData = null;

    if (this.state.showDiv) {
      divData = <div>My Data</div>;
    }

    return (
      <div className="App">
        <h1>Toggle Example</h1>

        <button onClick={this.toggleDivHandler}>Toggle Div</button>

        {divData}
      </div>
    );
  }
}

export default ToggleExp1;
