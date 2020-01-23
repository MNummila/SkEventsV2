import React, { Component } from "react";
import Event from "../Event";
import { ButtonGroup } from "reactstrap";
import { Button } from "react-bootstrap";

class Eventgroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
    this.callAPI();
    this.handleSumbit.bind(this);
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch("http://localhost:9000/home")
      .then(res => res.json())

      .then(data => {
        this.setState({ events: data });
      })
      .catch(err => err);
  }

  handleSumbit(id) {

    fetch('http://localhost:9000/home/' + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
        
      },
      body: JSON.stringify({
        "_id": id
      }),

    })
      .then(res => res.json()
      )


      .then(console.log("success"))


  }
  render() {
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
                    eventplace={event.eventplace}

                  />
                </div>
                
              </ButtonGroup>

            )

          })}
          
        </div>
        
      </div>
    );
  }
}

export default Eventgroup;
