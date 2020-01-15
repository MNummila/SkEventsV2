import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Eventgroup from "./Components/Eventgroup";
import Overlay from "./Components/Overlay/index";
import AddEvent from "./Components/AddEvent/AddEventClass";
import FormI from "./Components/AddEvent/Form";
import Login from "./Components/Login/index";

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
        <Overlay />
        <Eventgroup />
        <AddEvent />
        <Login/>
        <FormI/>
      </div>
    );
  }
}
export default App;
