import React from "react";
import { Header } from "semantic-ui-react";
import "./header.css";

function AppHeader() {
  return (
    <Header className="app-header">
      <h1>Code Complexity</h1>
      <a rel="noopener noreferrer" target="_blank" href="https://danielzamorano.pro">
        {" "}
        by Daniel Zamorano
      </a>
    </Header>
  );
}

export default AppHeader;
