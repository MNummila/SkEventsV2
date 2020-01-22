import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

import {Redirect} from 'react-router';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      show: false,
      redirect: false
    };

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  handleSumbit(event) {
    event.preventDefault();

    fetch(" http://localhost:9000/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.userName,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        this.setState({ show: false });
      })
      .then(() => this.setState({redirect: true}))

      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const {redirect} = this.state.redirect;
    if (redirect) {
      return <Redirect to='/home'/> 
    }
    return (
      <div className="login">
        <Button
          id="loginButton"
          onClick={this.showModal}
          style={{ backgroundColor: "orange" }}
        >
          Kirjaudu sisään
        </Button>
        <Modal isOpen={this.state.show} toggle={this.hideModal}>
          <ModalHeader toggle={this.hideModal}></ModalHeader>
          <ModalBody>
            <Form inline>
              <FormGroup>
                <Label for="userName" hidden>
                  Username
                </Label>
                <Input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Käyttäjätunnus"
                  onChange={e => this.setState({ userName: e.target.value })}
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="password" hidden>
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Salasana"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormGroup>{" "}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSumbit}>
              Kirjaudu sisään
            </Button>{" "}
            <Button color="secondary" onClick={this.hideModal}>
              Peruuta
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
