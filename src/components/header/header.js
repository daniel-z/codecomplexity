import React from 'react';
import { Header } from 'semantic-ui-react';
import './header.css';

function AppHeader() {
  return (
    <Header as='h1' className="app-header">
      Code Complexity by <a rel="noopener noreferrer" target="_blank" href="https://danielzamorano.pro">Daniel Zamorano</a>
    </Header>
  );
}

export default AppHeader;
