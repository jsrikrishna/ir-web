import React, { Component } from "react";
import Query from './Query'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  render() {
    return (
      <header>
        <MuiThemeProvider>
            <Query/>
        </MuiThemeProvider>
      </header>
    );
  }
}
