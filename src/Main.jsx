import React from "react";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import LeagueStandings from "./Components/LeagueStandings";
import UpcomingMatches from "./Components/UpcomingMatches";

const Main = (props) => {
  //console.log("Main props", props?.value?.parameters?.season);
  //const SeasonYear = props?.value?.parameters?.season;
  console.log("main", props.upcoming);
  return (
    <>
    <Switch>

      <Route path="/leaguestandings">
          <LeagueStandings/>
      </Route>
      <Route path="/:upcomingmatches">
          <UpcomingMatches upcoming={props.upcoming}/>
      </Route>
      <Route exact path="/">
      <Home upcoming={props.upcoming}/> 
      </Route>
     
    </Switch>
    </>
  );
};

export default Main;
