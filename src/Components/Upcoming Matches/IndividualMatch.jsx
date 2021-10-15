import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import { useLocation, useParams } from "react-router";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const IndividualMatch = (props) => {
  const params = useParams();
  console.log("Individual Match", params?.matchId);

  const [Id, setId] = useState();
  useEffect(() => {
    setId(params?.matchId);
  }, [params?.matchId]);
  console.log(Id);

  const location = useLocation();
  console.log("INDIVIDUAL MATCH", location);
  const data = location?.state?.data?.filterComplete;
  console.log("DATA", data);
  const individualMatch = data?.filter((item) => {
    // console.log(item?.fixture?.id)
    return item?.fixture?.id == Id;
  });

  console.log("INDIVIDUALMATCH", individualMatch);
  console.log("IS IT OVER", individualMatch?.fixture?.status?.short);
  return (
    <>
      <SideBar />
      <div>
        <h1 style={{ textAlign: "center" }}>
          {individualMatch?.[0]?.fixture?.status?.short === "FT"
            ? "Match Over!"
            : "Coming Soon!"}{" "}
          <br></br>
        </h1>
        <h3 style={{ textAlign: "center" }}>
          {individualMatch?.[0]?.fixture?.date}
        </h3>

        <Container>
          <Box
            style={{
              backgroundColor: "#e85d04",
              borderRadius: "25px",
              fontFamily: "Roboto",
              height: "200vh",
              opacity: "1",
              border: "5px solid rgba(0, 0, 0, 0.15)",
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              <img
                src={individualMatch?.[0]?.league?.logo}
                alt="League Logo"
                style={{ height: "70px", padding: "5px 0px 5px 0px" }}
              />
              <br></br>
              {individualMatch?.[0]?.league?.name}
            </h2>

            <h2>
              <div style={{ textAlign: "center", padding: "5px 0px 5px 0px" }}>
                <img
                  src={individualMatch?.[0]?.teams?.home?.logo}
                  alt="League Logo"
                  style={{ height: "70px", padding: "5px 0px 5px 0px" }}
                />
                <br></br>
                {individualMatch?.[0]?.teams?.home?.name} :{" "}
                {individualMatch?.[0]?.goals?.home}
              </div>
              <div style={{ textAlign: "center", padding: "5px 0px 5px 0px" }}>
                <img
                  src={individualMatch?.[0]?.teams?.away?.logo}
                  alt="League Logo"
                  style={{ height: "70px", padding: "5px 0px 5px 0px" }}
                />
                <br></br>
                {individualMatch?.[0]?.teams?.away?.name} :{" "}
                {individualMatch?.[0]?.goals?.away}
              </div>
            </h2>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default IndividualMatch;
