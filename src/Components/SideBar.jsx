import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsSoccerSharpIcon from "@mui/icons-material/SportsSoccerSharp";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [state, setState] = React.useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
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
        <input
          style={{ textAlign: "center", fontFamily: "Roboto" }}
          placeholder="Search"
        ></input>
        <button
          onClick={() => {
            console.log("search clicked");
          }}
          style={{
            textDecoration: "none",
            color: "black",
            fontFamily: "Roboto",
          }}
        >
          Search
        </button>
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
              {/* Upcoming matches title*/}
              <ListItem
                // button
                key={"Upcoming Matches"}
                onClick={() => console.log("Upcoming Matches Clicked")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                <ListItemText />
                Upcoming Matches
                <ListItemText />
              </ListItem>
            </div>
            <div>
              {/* Upcoming matches EPL */}
              <Link
                to="/upcomingmatches/EPL"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItem
                  button
                  key={"Upcoming Matches"}
                  onClick={() => console.log("Upcoming Matches Clicked")}
                >
                  <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                  <ListItemText />
                  EPL
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <div>
              {/* Upcoming matches La Liga */}
              <Link
                to="/upcomingmatches/LaLiga"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItem
                  button
                  key={"Upcoming Matches"}
                  onClick={() => console.log("Upcoming Matches Clicked")}
                >
                  <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                  <ListItemText />
                  La Liga
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <div>
              {/* Upcoming matches Bundesliga */}
              <Link
                to="/upcomingmatches/Bundesliga"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItem
                  button
                  key={"Upcoming Matches"}
                  onClick={() => console.log("Upcoming Matches Clicked")}
                >
                  <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                  <ListItemText />
                  Bundesliga
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <div>
              {/* Upcoming matches SerieA */}
              <Link
                to="/upcomingmatches/SerieA"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItem
                  button
                  key={"Upcoming Matches"}
                  onClick={() => console.log("Upcoming Matches Clicked")}
                >
                  <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                  <ListItemText />
                  Serie A
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <div>
              {/* Upcoming matches Ligue 1 */}
              <Link
                to="/upcomingmatches/Ligue1"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItem
                  button
                  key={"Upcoming Matches"}
                  onClick={() => console.log("Upcoming Matches Clicked")}
                >
                  <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                  <ListItemText />
                  Ligue 1
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <Divider />
            <div>
              {/* League Table title */}
              <ListItem
                // button
                key={"League Table"}
                onClick={() => console.log("League Table Clicked")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                <ListItemIcon>{<SportsSoccerSharpIcon />}</ListItemIcon>
                <ListItemText />
                League Tables
                <ListItemText />
              </ListItem>
            </div>
            <div>
              {/* League Table EPL */}
              <Link
                to="/leaguestandings/EPL"
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
                  EPL
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <div>
              {/* League Table La Liga */}
              <Link
                to="/leaguestandings/LaLiga"
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
                  La Liga
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <div>
              {/* League Table Bundesliga */}
              <Link
                to="/leaguestandings/Bundesliga"
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
                  Bundesliga
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <div>
              {/* League Table Serie A */}
              <Link
                to="/leaguestandings/SerieA"
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
                  Serie A
                  <ListItemText />
                </ListItem>
              </Link>
            </div>
            <div>
              {/* League Table Ligue 1 */}
              <Link
                to="/leaguestandings/Ligue1"
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
                  Ligue 1
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
      }}
    >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <h1
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              padding: "0px 0px 50px 0px",
            }}
          >
            Football App
          </h1>
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
