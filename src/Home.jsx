import React from "react"
import SideBar from "./Components/SideBar"
import UpcomingMatches from "./Components/UpcomingMatches"

const Home = (props) => {
    console.log("Home", props)    
    return (
        <div>
            <SideBar />
            <UpcomingMatches upcoming={props.upcoming}/>
        </div>
    )
}

export default Home