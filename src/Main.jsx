import React from "react";
import Home from "./Home";

const Main = (props) => {
    //console.log("Main props", props?.value?.parameters?.season);
    //const SeasonYear = props?.value?.parameters?.season;
    console.log("main", props.upcoming)
    return (
        <>
        {/* <h1>MAIN PAGE</h1> */}
        <Home upcoming={props.upcoming}/>
        {/* <h1>{SeasonYear}</h1> */}
        </>
    )
}

export default Main