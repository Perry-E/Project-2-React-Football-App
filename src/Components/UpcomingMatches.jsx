import React from "react";
import SideBar from "./SideBar";
//import { format } from 'date-fns'
// import { useParams } from "react-router-dom";

const UpcomingMatches = (props) => {
  console.log("Upcoming matches", props.upcoming?.response);
  const upcomingGames = props.upcoming?.response;
//   const params = useParams();
//   console.log("params dashboard", params);
  //   format (new Date(2021, 1, 11), "dd/MM/yyyy")
  //   const dates = [new props?..fixture?.date]

  return (
    <>
      <div>
        <div>
            <SideBar/>
          <h1 style={{ textAlign: "center" }}>Upcoming Matches (EPL)</h1>
          {upcomingGames?.map((item) => {
            return (
              // {(item?.fixture?.status?.long).filter(long=>long==="null")}
              <div
                key={item?.fixture?.id}
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UpcomingMatches;
