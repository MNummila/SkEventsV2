import React, { Component } from 'react'
import moment from 'moment';


export default class WeekEvents extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            days: [],
            dayObject: moment().dates
        }

    }

    

    render() {

        
        return (
            <div></div>
        );
    }
}
 