// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SpeakerProfile from "./SpeakerProfile";

// const speakerName = "홍길동";
function App() {
    // const speakerName = "홍길동";
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        // <div>
        //     <h1>Welcome to Bizza Platform, {speakerName}</h1>
        // </div>
        <div style={{ backgroundColor: "gray", margin: 20, color: "white" }}>
            <SpeakerProfile></SpeakerProfile>
        </div>
    );
}

export default App;
