/////////////////////////////////////////////////////////////////////
// //TODO - League table
// /////////////////////////////////////////////////////////////////////
// fetch("https://v3.football.api-sports.io/standings?league=39&season=2021", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "v3.football.api-sports.io",
//     "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx",
//   },
// });
// /////////////////////////////////////////////////////////////////////
// //TODO - Live Games
// /////////////////////////////////////////////////////////////////////
// fetch("https://v3.football.api-sports.io/fixtures?live=all", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "v3.football.api-sports.io",
//     "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx",
//   },
// });
// /////////////////////////////////////////////////////////////////////
// //TODO - Fixtures
// /////////////////////////////////////////////////////////////////////
// fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2021", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "v3.football.api-sports.io",
//     "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx",
//   },
// });
// /////////////////////////////////////////////////////////////////////
// //TODO - Live Games
// /////////////////////////////////////////////////////////////////////
// fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2021", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "v3.football.api-sports.io",
//     "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx",
//   },
// });

// /////////////////////////////////////////////////////////////////////
// //TODO - Videos
// /////////////////////////////////////////////////////////////////////
// fetch("https://www.scorebat.com/video-api/v3/")
//         .then((res) => res.json())
//         .then((data) => {
//           setStatus("resolved");
//           setLeagueTable(data);
//           console.log("league table", leagueTable.response[32].videos[0].embed);
//           })
//         .catch((error) => {
//           setStatus("error");
//           console.log(error);
//         });