import React, { Component } from 'react'
import Event from '../Event';
import { ButtonGroup } from 'reactstrap';



function Eventgroup(props) {




    return (

        <div className="eventgr">
            <div className="image">
                <img src="skevents1.png" width="200px" height="200px"></img> 
            </div>
            <ButtonGroup >
                <Event />
                <Event />
                <Event />
            </ButtonGroup>
            <br />
            <ButtonGroup>
                <Event />
                <Event />
                <Event />
            </ButtonGroup>
        </div>
    );
}


export default Eventgroup;