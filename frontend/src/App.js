import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Eventgroup from './Components/Eventgroup';
import Overlay from './Components/Overlay/index';
import AddEvent from './Components/AddEvent/AddEvent';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/home")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
  }

  componentDidMount() {
      this.callAPI();
  }

  render() {
      return (
          <div className="App">
            <Overlay />
            <Eventgroup/>
            <AddEvent/>
              <p className="App-intro">{this.state.apiResponse}</p>
          </div>
      );
  }
}
export default App;
