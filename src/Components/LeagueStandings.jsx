import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SideBar from "./SideBar";

export default function LeagueStandings(props) {
  const leagueTable = props.leagueTable?.response[0].league.standings[0];
  console.log("Table (LeagueStandings)", leagueTable);

  return (
    <>
      <div>
        <SideBar />
        <h1 style={{ textAlign: "center" }}>League Standings</h1>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 750 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Club</TableCell>
                <TableCell align="right">Matches Played</TableCell>
                <TableCell align="right">Win</TableCell>
                <TableCell align="right">Draw</TableCell>
                <TableCell align="right">Loss</TableCell>
                <TableCell align="right">Goals For(GF)</TableCell>
                <TableCell align="right">Goals Against(GA)</TableCell>
                <TableCell align="right">Goal Difference(GD)</TableCell>
                <TableCell align="right">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leagueTable?.map((row) => (
                <TableRow
                  key={row?.team?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" key={row?.team?.name}>
                    <img
                      src={row?.team?.logo}
                      alt="Team Logo"
                      style={{ height: "25px" }}
                    />
                    <br></br>
                    {row?.team?.name}
                  </TableCell>
                  <TableCell align="right">{row?.all?.played}</TableCell>
                  <TableCell align="right">{row?.all?.win}</TableCell>
                  <TableCell align="right">{row?.all?.draw}</TableCell>
                  <TableCell align="right">{row?.all?.lose}</TableCell>
                  <TableCell align="right">{row?.all?.goals?.for}</TableCell>
                  <TableCell align="right">
                    {row?.all?.goals?.against}
                  </TableCell>
                  <TableCell align="right">{row?.goalsDiff}</TableCell>
                  <TableCell align="right">{row?.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
