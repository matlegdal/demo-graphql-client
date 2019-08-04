import "./index.css";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";
import * as serviceWorker from "./serviceWorker";

const httpLink = createHttpLink({ uri: "http://localhost:4000" });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
