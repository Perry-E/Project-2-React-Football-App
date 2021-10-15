import React from "react";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import AllMatches from "./Components/Upcoming Matches/AllMatches";
import CompletedMatches from "./Components/Upcoming Matches/CompletedMatches";
import UpcomingMatches from "./Components/Upcoming Matches/UpcomingMatches";
import IndividualMatch from "./Components/Upcoming Matches/IndividualMatch";
import LeagueTable from "./Components/Upcoming Matches/LeagueTable";
import SideBar from "./Components/SideBar";

const Main = (props) => {
  console.log("Main all props", props);

  return (
    <>
      <Switch>
        <Route path="/AllMatches">
          <AllMatches upcoming={props.upcoming} />
        </Route>

        <Route path="/CompletedMatches/:leagueId">
          <CompletedMatches upcoming={props.upcoming} />
        </Route>

        <Route path="/IndividualMatch/:matchId">
          <IndividualMatch upcoming={props.upcoming} />
        </Route>

        <Route path="/LeagueTables">
          <LeagueTable leagueTable={props.leagueTable} />
        </Route>

        <Route path="/UpcomingMatches/:leagueId">
          <UpcomingMatches upcoming={props.upcoming} />
        </Route>

        <Route path="/sidebar">
          <SideBar upcoming={props.upcoming} />
        </Route>

        <Route exact path="/">
          <Home upcoming={props.upcoming} />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
