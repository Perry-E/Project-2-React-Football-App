import React from "react";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";

const IndividualMatches = (props) => {
  //     const [allLeagues, setAllLeagues] = useState([props])
  //     const [id, setId] = useState()
  const allLeagues = props?.upcoming;
  console.log("allLeagues", allLeagues);
  const {
    league,
    leagueid,
    matchid,
    home,
    away,
    goalshome,
    goalsaway,
    date,
    status,
  } = useParams();
  //   console.log("ITEMS", {score})
  console.log("params", {
    league,
    leagueid,
    matchid,
    home,
    away,
    goalshome,
    goalsaway,
    date,
    status,
  });

  //////////////////////////////////////////////////////////
  //   const leagueName = params?.league;
  //////////////////////////////////////////////////////////
  //   console.log("individual props (All leagues)", allLeagues);

  //   useEffect(()=>{
  //       const filterByLeagueId = (params) => {
  //         return setId(params.leagueid);
  //       };
  //       filterByLeagueId(params)

  //       const filterLeagues = (props) => {
  //         return console.log( "filter",
  //           props.filter(() => props.parameters?.league === (id)))
  //       };
  //       filterLeagues(allLeagues);
  //     }, [params, allLeagues, id, props])
  //     console.log("useState id", id)

  ///////////////////////////////////////////////////////////////////
  //   const [league, setLeague] = useState([]);
  //   const [matches, setMatches] = useState([]);
  //   const [id, setId] = useState();
  //   const [matchInfo, setMatchInfo] = useState();
  //   //   console.log("league name", leagueName);
  //   //const leagueId = params?.leagueid;
  //   //   console.log("league Id", leagueId);
  //   const matchId = params?.matchid;
  //   //   console.log("Match ID", matchId);
  //   //   console.log("FIND", allLeagues?.find(item => item?.parameters?.league ===leagueId))
  //   const findLeague = allLeagues?.find(
  //     (item) => item?.parameters?.league === params?.leagueid
  //   );
  //   //   console.log("Found League", findLeague);
  //   const leagueMatches = findLeague?.response;
  // console.log("leagueMatches", leagueMatches);

  // const findMatch = matches?.find(

  //   (item) => item?.[0]?.fixture?.id === id
  // );
  // console.log("Found match", findMatch)

  // useEffect(() => {
  //     setLeague(findLeague);
  //     setMatches([{ ...leagueMatches }]);
  //     setId(matchId);
  //     setMatchInfo(findMatch);
  // }, [matchId]);
  // console.log("League", league);
  // console.log("Matches", matches);
  // console.log("Id", id);
  // console.log("MatchInfo", matchInfo);
  ///////////////////////////////////////////////////////////////////

  //             leagueMatches?.map((items)=>{
  //                 console.log("SELECTED MATCHID", matchId)
  //                 console.log("Mapped items", items)
  // return(
  //     console.log('object values item', Object.values(items)?.filter((items)=>{
  //         return (
  //             Object.values(items).includes(matchId)
  //         )
  //     }))
  // )

  // return(
  //     console.log('object values item', Object.values(items)?.find((items => items?.date)))
  //     // Object.values(items)?.map((elements)=>{
  //     //     return(console.log(elements))
  //     // })
  //     // console.log(Object.values(items)?.find(item => item?.fixture?.id === matchId))
  // )

  // })

  //   const findMatch = leagueMatches?.find(item => item?.fixture?.id === matchId)
  //     console.log("Found match", findMatch)

  //   Object.values(allLeagues).filter((item)=>{
  //             return(
  //                 item.league === leagueId ? console.log("items found", item) : console.log("not found")
  //             )})

  // allLeagues?.map((item)=>{
  //     console.log("mapped items", item)
  //   return (

  //   const filterFunction = (leagueId) => {
  //     return (
  //         (leagueId === singleLeagueId ? console.log("filtered", leagueId) : console.log("nothing"))
  //     )
  //   };

  return (
    <>
      <SideBar />
      <h1 style={{ textAlign: "center" }}>{league}</h1>
      {/* {allLeagues?.filter(filterFunction(singleLeagueId)).map((props) => {
          console.log("after map and filter",props)
          return ( */}
      <h2
        style={{
          backgroundColor: "#e85d04",
          borderRadius: "25px",
          textAlign: "center",
          margin: "20px",
          padding: "20px",
        }}
      >
        <div style={{maxHeight:"800px"}}>
          {status !== "Match Finished" ? "Coming Soon!" : "Full Time"}
          <div>
            <img
              src={props?.teams?.home?.logo}
              alt="Team Logo"
              style={{ height: "50px", padding: "5px 0px 5px 0px" }}
            />{" "}
            {home} {status === "Match Finished" ? goalshome : ""}
          </div>

          <div>
            <img
              src={props?.teams?.away?.logo}
              alt="Team Logo"
              style={{ height: "50px", padding: "5px 0px 5px 0px" }}
            />{" "}
            {away} {status === "Match Finished" ? goalsaway : ""}
          </div>
        </div>
        <br></br> ({date})
      </h2>

      {/* )}
      )} */}
    </>
  );
};

export default IndividualMatches;
