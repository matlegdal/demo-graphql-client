import "./App.css";

import React from "react";
import { LinkList } from "./link-list/link-list.component";
import { CreateLink } from "./create-link/create-link.component";
import Header from "./header/header.component";
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
        </Switch>
      </div>
    </div>
  );
};
