import React from "react";

const Main = (props) => {
    console.log("Main props", props?.value?.parameters?.season);
    const SeasonYear = props?.value?.parameters?.season;
    return (
        <>
        <h1>MAIN PAGE</h1>
        <h1>Hello, Include NavBar Here</h1>
        <h1>{SeasonYear}</h1>
        </>
    )
}

export default Main