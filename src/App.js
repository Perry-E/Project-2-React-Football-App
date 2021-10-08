import React from "react"
import Main from "./Main"

function App() {
  const API_Key = process.env.REACT_APP_API_FOOTBALL_KEY
  console.log(API_Key)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Football App</h1>
        <Main />
      </header>
    </div>
  );
}

export default App;
