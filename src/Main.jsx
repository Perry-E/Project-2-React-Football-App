import React from "react";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import LeagueStandingsEpl from "./Components/League Standings/LeagueStandingsEpl";
import LeagueStandingsLaLiga from "./Components/League Standings/LeagueStandingsLaLiga";
import LeagueStandingsBundesliga from "./Components/League Standings/LeagueStandingsBundesliga";
import LeagueStandingsSerieA from "./Components/League Standings/LeagueStandingsSerieA"
import LeagueStandingsLigue1 from "./Components/League Standings/LeagueStandingsLigue1"
import UpcomingMatches from "./Components/UpcomingMatches";
import IndividualMatches from "./Components/IndividualMatch";
import SideBar from "./Components/SideBar";

const Main = (props) => {
  //console.log("Main props", props?.value?.parameters?.season);
  //const SeasonYear = props?.value?.parameters?.season;
  console.log("upcoming (main)", props.upcoming);
  console.log("table (main)", props.leagueTable);
  return (
    <>
      <Switch>
        <Route path="/LeagueStandings/EPL">
          <LeagueStandingsEpl leagueTable={props.leagueTable} />
        </Route>
        <Route path="/LeagueStandings/LaLiga">
          <LeagueStandingsLaLiga leagueTable={props.leagueTable} />
        </Route>
        <Route path="/LeagueStandings/Bundesliga">
          <LeagueStandingsBundesliga leagueTable={props.leagueTable} />
        </Route>
        <Route path="/LeagueStandings/SerieA">
          <LeagueStandingsSerieA leagueTable={props.leagueTable} />
        </Route>
        <Route path="/LeagueStandings/Ligue1">
          <LeagueStandingsLigue1 leagueTable={props.leagueTable} />
        </Route>
        <Route path="/UpcomingMatches">
          <UpcomingMatches upcoming={props.upcoming} />
        </Route>
        <Route path="/individualmatch">
          <IndividualMatches upcoming={props.upcoming} />
        </Route>
        <Route path="/sidebar/:upcoming">
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
