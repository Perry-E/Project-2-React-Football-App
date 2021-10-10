import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
//import Divider from '@mui/material/Divider';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { Route, Redirect, Link } from "react-router-dom";

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
        <input style={{ textAlign: "center" }} placeholder="Search"></input>
        <button
          onClick={() => {
            console.log("search clicked");
          }}
        >
          Search
        </button>
        {
          <>
            {/* <Route path="/"> */}
            <Link to="/">
              <ListItem
                button
                key={"Home"}
                onClick={() => console.log("Home Clicked")}
              >
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText />
                Home
                <ListItemText />
              </ListItem>
            </Link>
            {/* </Route> */}
            {/* <Route path="/upcomingmatches"> */}
            <Link to="/upcomingmatches">
              <ListItem
                button
                key={"Upcoming Matches"}
                onClick={() => console.log("Upcoming Matches Clicked")}
              >
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText />
                Upcoming Matches
                <ListItemText />
              </ListItem>
            </Link>
            {/* </Route> */}
            {/* <Route path="/leaguetable"> */}
            <Link to="/leaguetable">
              <ListItem
                button
                key={"League Table"}
                onClick={() => console.log("League Table Clicked")}
              >
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText />
                League Table
                <ListItemText />
              </ListItem>
            </Link>
            {/* </Route> */}
            <Route>
              <Redirect to="/" />
            </Route>
          </>
        }
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div style={{ backgroundColor: "#e85d04", borderRadius: "25px" }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <h1 style={{ textAlignVertical: "center", textAlign: "center", padding:"0px 0px 50px 0px" }}>
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
