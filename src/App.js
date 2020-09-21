import React from "react";
import "./App.css";
import ItemComponent from "./ItemComponent/ItemComponent";
import TestComponent from "./TestComponent/TestComponent";

function App() {
  return (
    <>
      <div className="App main-container">
        <img
          className="image-small"
          src={require("./images/EricGlasses.jpg")}
        />
        <h1>Eric Elvendahl</h1>
        <div>Full Stack Engineer, Musician, Friendly Geek</div>

        <div className="hr"></div>
        <h2>Education</h2>
        <div className="hr"></div>
        <TestComponent />
        <ItemComponent
          imagePath="../images/prime.png"
          title="Prime Digital Academy, Full Stack Engineering"
          itemText="Technologies and languages covered include React, Redux, Javascript, Node/NPM, Python, jQuery, Axios, Express, postgresql, pg, authorization/authentication, and REST/web APIs. My solo project was a secure, real-time, multi-user task list app built with React, Redux, Redux-saga, and Express."
        />
        <div className="hr"></div>
        <ItemComponent
          imagePath="../images/prime.png"
          title="A.A.S. in Computer Science"
          itemText="Primary languages studied were C++, Visual Basic, HTML/CSS, Javascript and Java. My final project was a digital audio delay/echo plugin developed for Jeskola Buzz in C++. It is now included in the official release of the program."
        />
        <div className="hr"></div>
        <ItemComponent
          imagePath="../images/prime.png"
          title="A.A.S. in Virtual Reality"
          itemText="Topics studied include 3D modeling, animation, digital graphics, 3D simulation, hardware, multimedia production. My final project was an immersive, generative 3D experience that created music and visual in real-time in response to user movement and input."
        />
        <div className="hr"></div>
        <h2>Experience</h2>
        <div className="hr"></div>
        <ItemComponent
          imagePath="../images/prime.png"
          title="Producer/Composer for British University Vietnam"
          itemText="Composed original music for promotional material for 'Bottega Veneta' art exhibition in Beijing"
          resourceCode="https://vimeo.com/176879823"
        />
        <div className="hr"></div>
        <ItemComponent
          imagePath="../images/prime.png"
          title="Producer/Composer for 'Lau'"
          itemText="Responsible for composing and recording a group of musicians for the original score."
          resourceCode="https://vimeo.com/109447568"
        />

        <div className="hr"></div>
        <ItemComponent
          imagePath="../images/prime.png"
          title="Composer and Associate Producer for 'XJW - Coming Out of the Jehovahs Witnesses'"
          itemText="Responsible for composing and recording original music and collaborating with contributors from three continents."
        />
        <div className="hr"></div>
        <p>Contact: ericelvendahl@gmail.com github.com/ericelvendahl</p>
      </div>
    </>
  );
}

export default App;
