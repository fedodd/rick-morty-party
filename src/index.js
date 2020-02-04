import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import "./styles.css";

const client = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
   uri: 'https://rickandmortyapi.com/graphql',
});


// import { gql } from "apollo-boost";
// // or you can use `import gql from 'graphql-tag';` instead
// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

var mountNode = document.getElementById("app");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App name="Jane" />
  </ApolloProvider>, mountNode);
