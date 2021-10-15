import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsSoccerSharpIcon from "@mui/icons-material/SportsSoccerSharp";
import { Link, useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function SideBar(props) {
  console.log("SIDEBAR PROPS", props);
  const params = useParams();
  console.log("SIDEBAR PARAMS", params);

  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log("handleSubmit", search);
  };

  const handleChange = (event) => {
    console.log("handleChange", event.target.value);
    console.log("handleChange after enter", search);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {
          <>
            <div>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItem
                  button
                  key={"Home"}
                  onClick={() => console.log("Home Clicked")}
                >
                  <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                  <ListItemText />
                  Home
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <Divider />

            <div>
              {/* Matches */}
              <Link
                to="/AllMatches"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItem
                  button
                  key={"Upcoming Matches"}
                  onClick={() => console.log("Matches Clicked")}
                >
                  <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                  <ListItemText />
                  Matches
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <Divider />
            <div>
              {/* League Table For reals */}
              <Link
                to="/LeagueTables"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItem
                  button
                  key={"League Table"}
                  onClick={() => console.log("League Table Clicked")}
                >
                  <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                  <ListItemText />
                  League Tables
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
          </>
        }
      </List>
      <Divider />
    </Box>
  );

  return (
    <div
      style={{
        backgroundColor: "#e85d04",
        borderRadius: "25px",
        fontFamily: "Roboto",
        border: "5px solid rgba(0, 0, 0, 0.15)",
      }}
    >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ float: "center" }} />
          </IconButton>
          <h1
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              padding: "0px 0px 50px 0px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Football App
            </Link>
          </h1>
          <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
