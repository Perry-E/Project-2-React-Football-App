import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
//import { format } from 'date-fns'

const Upcoming = (props) => {
  const all = props;
  console.log("ALL props", Object.values(all)?.[0]);
  const params = useParams();
  console.log("NEW UPCOMING PARAMS LEAGUE ID", params.leagueid);
  //   console.log("Upcoming matches", props.upcoming?.[0]?.response);
  const [id, setId] = useState([]);
  const [allGames, setAllGames] = useState();
  useEffect(() => {
    setId(params.leagueid);
    setAllGames(Object.values(all)?.[0]);
  }, [params.leagueid, all]);
  console.log("SET ID", id);
  console.log("SET ALL GAMES", allGames);

  const filteredLeague = allGames?.filter((item) => {
    return item?.parameters?.league === id;
  });
  console.log("FILTERED LEAGUE", filteredLeague);
  const secondFilter = filteredLeague?.[0]?.response;
  console.log("FILTER ROUND 2", secondFilter);
  ///////////////////////////////////////////////////////
  //TODO OLD UPCOMING STUFFF
  //////////////////////////////////////////////////////////
  //   useEffect(() => {
  //     const findId = props.upcoming?.[0]?.parameters;
  //     console.log("id", findId);
  //     setId(findId);
  //     console.log("useState id", id);
  //   }, [props.upcoming, id]);
  //   // const findId = id?.map((item)=>{
  //   //     return(
  //   //         item.upcoming?.[0]?.parameters?.league
  //   //     )
  //   // })
  //   const upcomingGames = props.upcoming?.[0]?.response;
  //   console.log("UPCOMING GAMES", upcomingGames);
  //////////////////////////////////////////////////////////////
  //   console.log("league id", findId)

  //   const params = useParams();
  //   console.log("params dashboard", params);
  //   format (new Date(2021, 1, 11), "dd/MM/yyyy")
  //   const dates = [new props?..fixture?.date]

  //   const [individual, setIndividual] = useState();
  // const handleClick = (event) =>{
  //     console.log("individual match clicked")
  //     setIndividual(event.currentTarget)
  //     console.log("individual state", individual)
  // }

  //   ()=>console.log("individual", item)

  return (
    <>
      <div>
        <div>
          <SideBar />
          <h1 style={{ textAlign: "center" }}>Upcoming Matches (EPL)</h1>
          <div style={{ textAlign: "center" }}>
            <Link
              to={`/matches/fulltime/${id}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained">Completed</Button>
            </Link>
            <Link
              to={`/matches/upcoming/${id}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained">Upcoming</Button>
            </Link>
          </div>
          {secondFilter
            ?.filter((item) => {
              return item?.fixture?.status?.short !== "FT";
            })
            .map((item) => {
            //   console.log("MAPPED ITEM", item);
              return (
                <Link
                  to={`/upcomingmatches/${item?.league?.name}/${id?.league}/${item?.fixture?.id}/${item?.teams?.home?.name}/${item?.teams?.away?.name}/${item?.goals?.home}/${item?.goals?.away}/${item?.fixture?.date}/${item?.fixture?.status?.long}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Roboto",
                  }}
                  key={item?.fixture?.id}
                  onClick={props.onClick}
                >
                  <div
                    style={{
                      backgroundColor: "#e85d04",
                      borderRadius: "25px",
                      textAlign: "center",
                      margin: "20px",
                      padding: "20px",
                    }}
                  >
                    <div>
                      <img
                        src={item?.teams?.home?.logo}
                        alt="Team Logo"
                        style={{ height: "50px", padding: "5px 0px 5px 0px" }}
                      />
                    </div>{" "}
                    {item?.teams?.home?.name} vs {item?.teams?.away?.name}{" "}
                    <div>
                      {" "}
                      <img
                        src={item?.teams?.away?.logo}
                        alt="Team Logo"
                        style={{ height: "50px", padding: "5px 0px 5px 0px" }}
                      />{" "}
                    </div>{" "}
                    <br></br> ({item?.fixture?.date})
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Upcoming;