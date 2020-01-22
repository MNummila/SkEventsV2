import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Eventgroup from "./Components/Eventgroup";
import AddEvent from "./Components/AddEvent/index";
import WeekView from "./Components/WeekEvents";
import AppNav from "./Components/AppNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.callAPI();
  }

  callAPI() {
    fetch("http://localhost:9000/home")
      .then(res => res.json())

      .then(data => {
        let firstKey = Object.keys(data)[0],
          count = data[firstKey];

        this.setState({ events: count });

        return count;
      })

      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    /*const events = this.state.events.map(event => (
            <div key={event._id}>
                <h3>name: {event.eventname}</h3>
                <h2>date: {event.eventdate}  </h2>
            </div>
        ))*/

    return (
      <div className="App">
        <AppNav />
        <div className="image">
          <img src="SKEvents250.png" width="250" height="250" alt=""></img>
        </div>
        <Eventgroup />
        <WeekView /> 
        <AddEvent />
      </div>
    );
  }
}
export default App;
