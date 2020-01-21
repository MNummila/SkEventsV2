import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import Login from '../Login';
import {makeStyles} from '@material-ui/core';
export default class AppNav extends Component {


    useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            
        }
    }));

    render(){
        return(
            <AppBar position = "static" style={{width: "auto"}}>
                <Toolbar>
                    <Typography>
                        SKEvents
                    </Typography>
                    <Button color="inherit" style={{marginLeft: "auto"}}><Login/></Button>
                </Toolbar>


            </AppBar>
        );
    }
}