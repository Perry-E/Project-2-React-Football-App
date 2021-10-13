import React from "react";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import LeagueStandingsEpl from "./Components/League Standings/LeagueStandingsEpl";
import LeagueStandingsLaLiga from "./Components/League Standings/LeagueStandingsLaLiga";
import LeagueStandingsBundesliga from "./Components/League Standings/LeagueStandingsBundesliga";
import LeagueStandingsSerieA from "./Components/League Standings/LeagueStandingsSerieA";
import LeagueStandingsLigue1 from "./Components/League Standings/LeagueStandingsLigue1";
import UpcomingMatchesEpl from "./Components/Upcoming Matches/UpcomingMatchesEpl";
import UpcomingMatchesLaLiga from "./Components/Upcoming Matches/UpcomingMatchesLaLiga";
import UpcomingMatchesBundesliga from "./Components/Upcoming Matches/UpcomingMatchesBundesliga";
import UpcomingMatchesSerieA from "./Components/Upcoming Matches/UpcomingMatchesSerieA";
import UpcomingMatchesLigue1 from "./Components/Upcoming Matches/UpcomingMatchesLigue1";
import Upcoming from "./Components/matches/Upcoming";
import FullTime from "./Components/matches/FullTime";
import IndividualMatches from "./Components/IndividualMatch";

import SideBar from "./Components/SideBar";

const Main = (props) => {
    console.log("Main all props", props)
  //console.log("Main props", props?.value?.parameters?.season);
  //const SeasonYear = props?.value?.parameters?.season;
//   console.log("upcoming (main)", props.upcoming);
//   console.log("table (main)", props.leagueTable);
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
        <Route path="/UpcomingMatches/EPL">
          <UpcomingMatchesEpl upcoming={props.upcoming} />
        </Route>
        <Route path="/UpcomingMatches/LaLiga">
          <UpcomingMatchesLaLiga upcoming={props.upcoming} />
        </Route>
        <Route path="/UpcomingMatches/Bundesliga">
          <UpcomingMatchesBundesliga upcoming={props.upcoming} />
        </Route>
        <Route path="/UpcomingMatches/SerieA">
          <UpcomingMatchesSerieA upcoming={props.upcoming} />
        </Route>
        <Route path="/UpcomingMatches/Ligue1">
          <UpcomingMatchesLigue1 upcoming={props.upcoming} />
        </Route>
        <Route path="/upcomingmatches/:league/:leagueid/:matchid/:home/:away/:goalshome/:goalsaway/:date/:status">
          <IndividualMatches upcoming={props.upcoming} />
        </Route>
        <Route path="/sidebar/:upcoming">
          <SideBar upcoming={props.upcoming} />
        </Route>
        <Route path="/matches/upcoming/:leagueid">
          <Upcoming upcoming={props.upcoming} />
        </Route>
        <Route path="/matches/fulltime/:leagueid">
          <FullTime upcoming={props.upcoming} />
        </Route>
        <Route exact path="/">
          <Home upcoming={props.upcoming} />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
