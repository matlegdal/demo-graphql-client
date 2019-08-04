import "./App.css";

import React from "react";
import { LinkList } from "./link-list/link-list.component";
import { CreateLink } from "./create-link/create-link.component";

export const App = () => {
  return (
    <div>
      <LinkList />
      <CreateLink />
    </div>
  );
};
