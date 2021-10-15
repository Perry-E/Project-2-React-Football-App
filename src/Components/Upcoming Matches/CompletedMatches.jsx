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
  { id: "goalsHome", label: "Scored", minWidth: 170 },
  { id: "Away", label: "Away", minWidth: 170 },
  { id: "goalsAway", label: "Scored", minWidth: 170 },
  {
    id: "Date",
    label: "Date",
    minWidth: 170,
    align: "right",
  },
  {
    id: "Id",
    label: "ID",
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

  const filterComplete = singleLeague?.filter((item) => {
    return item?.fixture?.status?.short === "FT";
  });

  console.log("filterComplete", filterComplete);

  function createData(Home, goalsHome, Away, goalsAway, Date, Id) {
    return { Home, goalsHome, Away, goalsAway, Date, Id };
  }
  const mapped = filterComplete?.map((item) => {
    return createData(
      item?.teams?.home?.name,
      item?.goals?.home,
      item?.teams?.away?.name,
      item?.goals?.away,
      item?.fixture?.date,
      item?.fixture?.id
    );
  });

  console.log("MAPPED", mapped);

  const rows = mapped;

  return (
    <>
      <SideBar />
      <div>
        <h1 style={{ textAlign: "center" }}>Completed Matches{}</h1>
        <h5 style={{ textAlign: "center" }}>
          Click on ID (Right of the screen) to view individual matches
        </h5>
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
                            <div>
                              <Link
                                to={{
                                  pathname: `/IndividualMatch/${value}`,
                                  state: { data: { filterComplete } },
                                }}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                  fontFamily: "Roboto",
                                }}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </Link>
                            </div>
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
