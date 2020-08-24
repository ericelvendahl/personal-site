import React from "react";
import "./App.css";
import ItemComponent from "./ItemComponent/ItemComponent";

function App() {
  return (
    <>
      <div className="App main-container">
        <ItemComponent
          imagePath="./logo.svg"
          title="eric"
          itemText="I did a cool thing and it was neat"
        />
        <div className="hr"></div>

        <ItemComponent
          imagePath="./logo.svg"
          title="eric"
          itemText="I did a cool thing and it was neat"
        />
        <div className="hr"></div>

        <ItemComponent
          imagePath="./logo.svg"
          title="eric"
          itemText="I did a cool thing and it was neat"
        />
        <div className="hr"></div>
      </div>
    </>
  );
}

export default App;
