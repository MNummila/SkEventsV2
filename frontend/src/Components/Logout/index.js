import React, { Component } from "react";
import { Button } from "reactstrap";

class Logout extends Component {
  handleLogout(event) {
    event.preventDefault();
    fetch("http://localhost:9000/auth/logout", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("refeshToken")
      })
    })
      .then(data => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      })
      .then(window.alert("Olet kirjautunut ulos!"))
      .then(window.location.reload())
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="logout">
        <Button
          id="logoutButton"
          onClick={this.handleLogout}
          style={{
            backgroundColor: "orange",
            boxShadow: "1px 1px 5px grey"
            }}
        >
          Kirjaudu ulos
        </Button>
      </div>
    );
  }
}

export default Logout;
