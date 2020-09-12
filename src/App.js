import React from "react";
import "./App.css";

function App() {
  const [message, setMessage] = React.useState("JavaScript is so cool.");
  
  function handleClick() {setMessage("my updated message");
  }
  return (
    <div>
    <h1>{message}</h1>
    <button onClick={handleClick}>Update the message!</button>
    </div>
  );
}

export default App;