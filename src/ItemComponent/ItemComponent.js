import React, { Component } from "react";
import myImage from "../images/minimal.jpg";

class ItemComponent extends Component {
  componentDidMount() {}

  state = {};

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }; // end handleInputChangeFor

  render() {
    return (
      <div className="parent">
        <div className="child item-image">
          <img src={require('../logo.svg')}></img>
        </div>
        <div className="child item-text">
          <h3>{this.props.title}</h3>
          {this.props.itemText}
        </div>
        <div className="child">I am another childs</div>
        <div className="child">Yabba dabba doo, fads;foiajs;foaij</div>
      </div>
    );
  }
}

export default ItemComponent;
