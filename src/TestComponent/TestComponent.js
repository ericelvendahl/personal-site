import React, { Component, useState, useEffect } from "react";
import myImage from "../images/minimal.jpg";
import ReactPlayer from "react-player/lazy";

const TestComponent = (props) => {

  // const handleInputChangeFor = (propertyName) => (event) => {
  //   this.setState({
  //     [propertyName]: event.target.value,
  //   });
  // }; // end handleInputChangeFor

  const [myString, setMyString] = useState('');

  const handleInputChange = (e) => setMyString({
    ...myString,
    [e.currentTarget.name]: e.currentTarget.value
  })
  
  // Replacement for componentDidMount()
  useEffect(() => {
    fetch('url')
    .then(res => res.json())
    .then(items => setMyString(''))
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  // Replacement for componentDidUpdate()
  

  return (
    <div className="parent">
      <div className="child item-image">
        {JSON.stringify(myString)}
        <input type="text" name="stringInput" onChange={handleInputChange}/>
        <div className="player-wrapper">
          <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=d8CGWZ8DNgs"></ReactPlayer>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
