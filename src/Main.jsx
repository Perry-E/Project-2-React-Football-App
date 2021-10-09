import React from "react";
import SideBar from "./Components/SideBar";

const Main = (props) => {
    console.log("Main props", props?.value?.parameters?.season);
    const SeasonYear = props?.value?.parameters?.season;
    return (
        <>
        <SideBar />
        <h1>Hello, Include NavBar Here</h1>
        <h1>{SeasonYear}</h1>
        </>
    )
}

export default Main