import React, { Component } from "react";
import myImage from "../images/minimal.jpg";
import ReactPlayer from "react-player/lazy";


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
          <img src={require(this.props.imagePath)}></img>
    
          <div className="player-wrapper">
            <ReactPlayer
              width="100%"
              url={this.props.resourceCode}
            ></ReactPlayer>
          </div>
          {this.props.resourceCode}
        </div>
        <div className="child-text item-text">
          <h3>{this.props.title}</h3>
          {this.props.itemText}
        </div>
      </div>
    );
  }
}

export default ItemComponent;
