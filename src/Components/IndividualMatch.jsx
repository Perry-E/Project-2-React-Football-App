import React from "react"
import SideBar from "./SideBar"
import {useParams} from "react-router-dom"


const IndividualMatches = () => {
    const params = useParams();
    console.log("Individual Matches", params);

    return(
        <>
        <SideBar/>
        <h1 style={{textAlign:"center"}}>Individual Match</h1>
        
        </>
    )
}

export default IndividualMatches