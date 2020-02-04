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

var mountNode = document.getElementById("app");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App name="Jane" />
  </ApolloProvider>, mountNode);
