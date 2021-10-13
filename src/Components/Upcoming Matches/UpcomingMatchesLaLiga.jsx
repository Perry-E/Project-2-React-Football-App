import React, {useState, useEffect} from "react";
import SideBar from "../SideBar";
import { Link } from "react-router-dom";
//import { format } from 'date-fns'

const UpcomingMatchesLaLiga = (props) => {
    console.log("upcoming matches EPL all props", props)
//   console.log("Upcoming matches", props.upcoming?.[0]?.response);
const [id, setId] = useState([])
useEffect(() => {
    const findId= props.upcoming?.[1]?.parameters
    console.log("id", findId)
    setId(findId)
    console.log("useState id", id)
}, [props.upcoming, id])
    // const findId = id?.map((item)=>{
    //     return(
    //         item.upcoming?.[0]?.parameters?.league
    //     )    
    // })
  const upcomingGames = props.upcoming?.[1]?.response;
  console.log("UPCOMING GAMES", upcomingGames)


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
          <h1 style={{ textAlign: "center" }}>All Matches (La Liga)</h1>
          {upcomingGames?.map((item) => {
            return (
              <Link
                to={`/upcomingmatches/${item?.league?.name}/${id?.league}/${item?.fixture?.id}/${item?.teams?.home?.name}/${item?.teams?.away?.name}/${item?.goals.home}/${item?.goals.away}/${item?.fixture?.date}/${item?.fixture.status.long}`}
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
                //   onClick={() =>
                //     upcomingGames?.findIndex(() =>
                //       console.log(item?.fixture?.id)
                //     )
                //   }
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

export default UpcomingMatchesLaLiga;

// import React, { useState, useEffect } from "react";
// import SideBar from "../SideBar";
// import { Link } from "react-router-dom";
// //import { format } from 'date-fns'

// const UpcomingMatchesEpl = (props) => {
//   console.log("Upcoming matches", props.upcoming?.[0]?.response);

//   // const filterPlayed = () => {
//     // .filter((item) =>
//     // item?.fixture?.status?.long !== "Match Finished"
//     //   ? setNotFinished(item)
//     //   : setFinished([item])
// //   )

//   console.log("Not Finished", notFinished);
//   console.log("Finished", finished);

//   //  }
//   const upcomingGames = props.upcoming?.[0]?.response;
//   //   const params = useParams();
//   //   console.log("params dashboard", params);
//   //   format (new Date(2021, 1, 11), "dd/MM/yyyy")
//   //   const dates = [new props?..fixture?.date]
//   const [notFinished, setNotFinished] = useState([]);
//   const [finished, setFinished] = useState([]);

// useEffect(()=>{
//     upcomingGames?.map((item)=>item)
// },[])

//   return (
//     <>
//       <div>
//         <div>
//           <SideBar />
//           <h1 style={{ textAlign: "center" }}>Matches (EPL)</h1>

//             ?.map((item) => {
//               return (
//                 <div
//                   key={item?.fixture?.id}
//                   style={{
//                     backgroundColor: "#e85d04",
//                     borderRadius: "25px",
//                     textAlign: "center",
//                     margin: "20px",
//                     padding: "20px",
//                   }}
//                   onClick={() => {
//                     console.log("individual match clicked");
//                   }}
//                 >
//                   <Link to="/upcomingmatches/individualmatch"></Link>
//                   <div>
//                     <img
//                       src={item?.teams?.home?.logo}
//                       alt="Team Logo"
//                       style={{ height: "50px", padding: "5px 0px 5px 0px" }}
//                     />
//                   </div>{" "}
//                   {item?.teams?.home?.name} vs {item?.teams?.away?.name}{" "}
//                   <div>
//                     {" "}
//                     <img
//                       src={item?.teams?.away?.logo}
//                       alt="Team Logo"
//                       style={{ height: "50px", padding: "5px 0px 5px 0px" }}
//                     />{" "}
//                   </div>{" "}
//                   <br></br> ({item?.fixture?.date})
//                 </div>
//               );

//         </div>
//       </div>
//     </>
//   );
// };

// export default UpcomingMatchesEpl;