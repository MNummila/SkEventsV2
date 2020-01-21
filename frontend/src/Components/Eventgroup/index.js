import React, { Component } from 'react'
import Event from '../Event';
import { ButtonGroup } from 'reactstrap';

class Eventgroup extends Component {


    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
        this.callAPI();

    }

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {
        fetch("http://localhost:9000/home")

            .then(res => res.json())


            .then(data => {
                this.setState({ events: data })
            })
            .catch(err => err);
    }
    render() {

        let object = [];
        return (
            
            <div className="eventgr">
                
                <div className="box">
                {this.state.events.map((event, i) => {
                    return (
                        
                        <ButtonGroup key={i}>
                            
                            <div key={event._id}>
                        
                            
                                <Event 
                                eventid={event._id} 
                                eventname={event.eventname} 
                                eventdate={event.eventdate} 
                                eventdescription={event.eventdescription} 
                                eventplace={event.eventplace} />
                            </div>
                            
                        </ButtonGroup>
                        
                    );
                })}
                </div>
                
            
            </div>
        );
    }
}

export default Eventgroup;