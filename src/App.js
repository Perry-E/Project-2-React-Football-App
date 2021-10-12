import React, { useState, useEffect } from "react";
import Main from "./Main";
import "./App.css";
import tableEpl from "./API league table json files/tableEpl.json";
import tableLaLiga from "./API league table json files/tableLaLiga.json";
import tableBundesliga from "./API league table json files/tableBundesliga.json"
import tableSerieA from "./API league table json files/tableSerieA.json"
import tableLigue1 from "./API league table json files/tableLigue1.json"

import fixturesEpl from "./API fixtures json files/fixturesEpl.json"
function App() {
  // const API_Key = process.env.REACT_APP_API_FOOTBALL_KEY;
  // const [status, setStatus] = useState("idle");

  // const [upcoming, setUpcoming] = useState();
  // const UpcomingFixtures = () => {
  //   useEffect(() => {
  //     console.log(status);
  //     setStatus("pending");
  //     console.log(status);
  //     fetch(
  //       "https://v3.football.api-sports.io/fixtures?league=39&season=2021",
  //       {
  //         method: "GET",
  //         headers: {
  //           "x-rapidapi-host": "v3.football.api-sports.io",
  //           "x-rapidapi-key": API_Key,
  //         },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setStatus("resolved");
  //         console.log(status);
  //         //setLeagueTable(data);
  //         setUpcoming(data);
  //       })
  //       .catch((error) => {
  //         setStatus("error");
  //         console.log(error);
  //       });
  //   }, []);
  // };
  // UpcomingFixtures();
  // //console.log("league table", leagueTable);
  // console.log("Upcoming Games (App)", upcoming);

  // const [leagueTable, setLeagueTable] = useState();
  // const LeagueTable = () => {
  //   useEffect(() => {
  //     console.log(status);
  //     setStatus("League Table pending");
  //     console.log(status);
  //     fetch(
  //       "https://v3.football.api-sports.io/standings?league=39&season=2021",
  //       {
  //         method: "GET",
  //         headers: {
  //           "x-rapidapi-host": "v3.football.api-sports.io",
  //           "x-rapidapi-key": API_Key,
  //         },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setStatus("League Table resolved");
  //         console.log(status);
  //         setLeagueTable(data);
  //       })
  //       .catch((error) => {
  //         setStatus("League Table error");
  //         console.log(error);
  //       });
  //   }, []);
  // };
  // LeagueTable();
  // console.log("League Table (App)", leagueTable);

  //TODO league fixtures json
  console.log("EPL fixtures", fixturesEpl)
  const [upcoming, setUpcoming] = useState();
  useEffect(()=>{
    setUpcoming(fixturesEpl)
  }, [])

  //TODO league table json
  console.log("EPL table", tableEpl);
  console.log("La Liga table", tableLaLiga)
  console.log("Bundesliga table", tableBundesliga)
  console.log("Serie A table", tableSerieA)
  console.log("Ligue 1 table", tableLigue1)
  const [leagueTable, setLeagueTable] = useState();
  useEffect(()=>{
    setLeagueTable(tableEpl);
    setLeagueTable([tableEpl, tableLaLiga, tableBundesliga, tableSerieA, tableLigue1])
  }, [])
  console.log("League total", leagueTable)

  return (
    <div className="App">
      <header className="App-header">
        <Main style={{ fontFamily: "sans-serif" }} leagueTable={leagueTable} upcoming={upcoming}/>
        {/*upcoming={upcoming} leagueTable={leagueTable} ADD TO <MAIN/>*/}
      </header>
    </div>
  );
}

export default App;
