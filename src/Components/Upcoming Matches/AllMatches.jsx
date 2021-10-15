import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SideBar from "../SideBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const columns = [
  { id: "Home", label: "Home", minWidth: 170 },
  { id: "Away", label: "Away", minWidth: 170 },
  {
    id: "Date",
    label: "Date",
    minWidth: 170,
    align: "right",
  },
];

export default function AllMatches(props) {
  console.log("MATCHES", props);

  const [id, setId] = useState([]);
  useEffect(() => {
    const findId = props.upcoming?.[0]?.parameters;
    console.log("id", findId);
    setId(findId);
    console.log("useState id", id);
  }, [props.upcoming, id]);

  const upcomingGames = props.upcoming;
  console.log("UPCOMING GAMES", upcomingGames);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [leagueId, setLeagueId] = useState("39");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const EPL = () => {
    return setLeagueId("39");
  };
  const laLiga = () => {
    return setLeagueId("140");
  };
  const bundesliga = () => {
    return setLeagueId("78");
  };
  const serieA = () => {
    return setLeagueId("135");
  };
  const ligue1 = () => {
    return setLeagueId("61");
  };
  console.log("SET LEAGUE ID", leagueId);

  const filtered = upcomingGames?.filter((item) => {
    return item?.parameters.league === leagueId;
  });
  console.log("ALL MATCHES FILTERED", filtered);

  const singleLeague = filtered?.[0]?.response;
  console.log("SINGLE LEAGUE", singleLeague);

  function createData(Home, Away, Date) {
    return { Home, Away, Date };
  }
  const mapped = singleLeague?.map((item) => {
    return createData(
      item?.teams?.home?.name,
      item?.teams?.away?.name,
      item?.fixture?.date
    );
  });

  console.log("MAPPED", mapped);

  const rows = mapped;

  return (
    <>
      <SideBar />
      <div>
        <h1 style={{ textAlign: "center" }}>All Matches{}</h1>
      </div>
      <div>
        <Button variant="contained" size="small" onClick={EPL}>
          EPL
        </Button>

        <Button variant="contained" size="small" onClick={laLiga}>
          La Liga
        </Button>

        <Button variant="contained" size="small" onClick={bundesliga}>
          Bundesliga
        </Button>

        <Button variant="contained" size="small" onClick={serieA}>
          Serie A
        </Button>

        <Button variant="contained" size="small" onClick={ligue1}>
          Ligue 1
        </Button>

        <Link
          to={`/UpcomingMatches/${leagueId}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" size="small" style={{ float: "right" }}>
            Upcoming
          </Button>
        </Link>

        <Link
          to={`/CompletedMatches/${leagueId}`}
          style={{ textDecoration: "none", flex: "wrap" }}
        >
          <Button variant="contained" size="small" style={{ float: "right" }}>
            Completed
          </Button>
        </Link>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column, index) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={index} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
