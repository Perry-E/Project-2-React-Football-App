import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsSoccerSharpIcon from "@mui/icons-material/SportsSoccerSharp";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function SideBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

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
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
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
            <Search style={{ margin: "20px 0px 0px 0px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
