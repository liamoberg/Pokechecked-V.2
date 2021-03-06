import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql"
// });

// client
//   .query({
//     query: gql`
//       {
//         fetchHighlights(Hello: "hello") {
//           day
//           games {
//             homeTeam
//             awayTeam
//             homeGoals
//             awayGoals
//             homeWin
//             arena
//             date
//             gameIsFinished
//             requiredOvertime
//             url
//           }
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
