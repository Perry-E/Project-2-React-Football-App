import React, { useState, useEffect } from "react";
import Main from "./Main";

function App() {
  const API_Key = process.env.REACT_APP_API_FOOTBALL_KEY;
  const [status, setStatus] = useState("idle");
  const [leagueTable, setLeagueTable] = useState();

  const LeagueTable = () => {

    useEffect(() => {
      console.log(status);
      setStatus("pending");
      console.log(status);
      fetch(
        "https://v3.football.api-sports.io/standings?league=39&season=2021",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": API_Key,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setStatus("resolved");
          console.log(status);
          setLeagueTable(data);
        })
        .catch((error) => {
          setStatus("error");
          console.log(error);
        });
      }, []);
    };
    LeagueTable();
    console.log("league table", leagueTable);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Football App</h1>
        <Main value={leagueTable}/>
      </header>
    </div>
  );
}

export default App;
