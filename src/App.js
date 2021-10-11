import React, { useState, useEffect } from "react";
import Main from "./Main";
import "./App.css";

function App() {
  const API_Key = process.env.REACT_APP_API_FOOTBALL_KEY;
  const [status, setStatus] = useState("idle");

  const [upcoming, setUpcoming] = useState();
  const UpcomingFixtures = () => {
    useEffect(() => {
      console.log(status);
      setStatus("pending");
      console.log(status);
      fetch(
        "https://v3.football.api-sports.io/fixtures?league=39&season=2021",
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
          //setLeagueTable(data);
          setUpcoming(data);
        })
        .catch((error) => {
          setStatus("error");
          console.log(error);
        });
    }, []);
  };
  UpcomingFixtures();
  //console.log("league table", leagueTable);
  console.log("Upcoming Games (App)", upcoming);

  
 
  const [leagueTable, setLeagueTable] = useState();
  const LeagueTable = () => {
    useEffect(() => {
      console.log(status);
      setStatus("League Table pending");
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
          setStatus("League Table resolved");
          console.log(status);
          setLeagueTable(data);
        })
        .catch((error) => {
          setStatus("League Table error");
          console.log(error);
        });
    }, []);
  };
  LeagueTable();
  console.log("League Table (App)", leagueTable);

  return (
    <div className="App">
      <header className="App-header">
        <Main style={{ fontFamily: "sans-serif" }} upcoming={upcoming} leagueTable={leagueTable} />
        {/*upcoming={upcoming} leagueTable={leagueTable} ADD TO <MAIN/>*/}
      </header>
    </div>
  );
}

export default App;