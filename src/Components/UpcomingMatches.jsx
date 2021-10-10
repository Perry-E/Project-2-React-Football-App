import React from "react";
//import { format } from 'date-fns'

const UpcomingMatches = (props) => {
  console.log("Upcoming matches", props.upcoming?.response);
  const upcomingGames = props.upcoming?.response;
//   format (new Date(2021, 1, 11), "dd/MM/yyyy")
//   const dates = [new props?..fixture?.date]

  return (
    <>
      <div>
        <div>
        <h1>Upcoming Matches (EPL)</h1>
        {upcomingGames?.map((item)=>{
            return(
                // {(item?.fixture?.status?.long).filter(long=>long==="null")}
        <div key={item?.fixture?.id} style={{ backgroundColor: "#dc2f02", opacity:"80%", borderRadius: "30%", textAlign: "center", margin: "20px", padding: "20px"}}>
            <img src={item?.teams?.home?.logo} alt="Team Logo" style={{height: "50px"}}/> {item?.teams?.home?.name} vs {item?.teams?.away?.name}<img src={item?.teams?.away?.logo} alt="Team Logo" style={{height: "50px"}} /> <br></br> ({item?.fixture?.date})
        </div>

            )
            })}
        </div>
      </div>
    </>
  );
};

export default UpcomingMatches;
