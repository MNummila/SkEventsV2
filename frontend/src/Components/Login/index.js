import React, { useState } from "react";
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

function Login(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className="login">
      <Button id="loginButton" onClick={toggle}>
        Kirjaudu sisään
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
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
              />
            </FormGroup>{" "}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Kirjaudu sisään
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Peruuta
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;
