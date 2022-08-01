import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const uri =
  process.env.NODE_ENV === "production"
    ? "https://lift-off-tutorial-server.herokuapp.com/"
    : "http://localhost:4000/";

console.log("🚀 ~ file: index.js ~ line 8 ~ uri", uri);
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
