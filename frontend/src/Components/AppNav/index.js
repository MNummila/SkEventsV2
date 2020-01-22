import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import Login from "../Login";
import Logout from "../Logout";
import { makeStyles } from "@material-ui/core";
export default class AppNav extends Component {
  constructor(props) {
    super(props);
    this.state = { token: false };
  }
  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    }
  }));

  render() {
    return (
      <AppBar position="static" style={{ width: "auto" }}>
        <Toolbar>
          <Typography>SKEvents</Typography>
          
            <Login />
            <Logout />
            
        </Toolbar>
      </AppBar>
    );
  }
}
