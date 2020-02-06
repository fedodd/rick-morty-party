import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import "./styles.pcss";

const client = new ApolloClient({
   uri: 'https://rickandmortyapi.com/graphql',
});

var mountNode = document.getElementById("app");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, mountNode);
