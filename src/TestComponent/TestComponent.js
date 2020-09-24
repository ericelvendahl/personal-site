import React, { Component, useEffect } from "react";
import myImage from "../images/minimal.jpg";
import ReactPlayer from "react-player/lazy";
import { useInputChange } from "../modules/useInputChange";

const TestComponent = (props) => {
  const [input, handleInputChange] = useInputChange();
  // const handleInputChangeFor = (propertyName) => (event) => {
  //   this.setState({
  //     [propertyName]: event.target.value,
  //   });
  // }; // end handleInputChangeFor

  // Previous logic for handling input change from before
  // useInputChange was imported above
  // const [myString, setMyString] = useState("");

  // const handleInputChange = (e) =>
  //   setMyString({
  //     ...myString,
  //     [e.currentTarget.name]: e.currentTarget.value,
  //   });

  // Replacement for componentDidMount()
  // useEffect(() => {
  //   fetch("url")
  //     .then((res) => res.json())
  //     .then((items) => setMyString(""))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // Replacement for componentDidUpdate()

  return (
    <div className="parent">
      <div className="child item-image">
        {JSON.stringify(input)}
        <input type="text" name="stringInput1" onChange={handleInputChange} />
        <input type="text" name="stringInput2" onChange={handleInputChange} />
        <input type="text" name="stringInput3" onChange={handleInputChange} />
        <input type="text" name="stringInput4" onChange={handleInputChange} />
        <input type="text" name="stringInput5" onChange={handleInputChange} />
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            url="https://www.youtube.com/watch?v=d8CGWZ8DNgs"
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
