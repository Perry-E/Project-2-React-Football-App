import React from "react";
import SideBar from "./SideBar";

const Home = (props) => {
  console.log("Home", props);
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Home Page</h1>
      </div>
    </>
  );
};

export default Home;
