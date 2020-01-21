import React, { Component } from "react";

import {
  FormGroup,
  Input,
  Label,
  Form,
  Button,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";

class AddEvent extends Component {
  //Määritellään staten attribuutit.
  constructor(props) {
    super(props);
    this.state = {
      eventname: "",
      eventdate: "",
      eventplace: "",
      eventdescription: "",
      show: false
    };

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  //
  hideModal = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  //Request POST 
  handleSumbit(event) {
    event.preventDefault();
    
    fetch("http://localhost:9000/home", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventname: this.state.eventname,
        eventdate: this.state.eventdate,
        eventplace: this.state.eventplace,
        eventdescription: this.state.eventdescription
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Success");
      })

      .catch(err => {
        console.error(err);
      });
  }

componentDidUpdate() {}

  render() {
    return (
      <div className="addEv">
        <Button id="addEventButton" onClick={this.showModal}>
          Lisää tapahtuma
        </Button>
        {/*Form avautuu sivun päälle*/}
        <Modal isOpen={this.state.show} toggle={this.hideModal}>
          <ModalHeader>Lisää tapahtuma</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSumbit}>
              <FormGroup>
                <Label for="Title"></Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Tapahtuman nimi"
                  onChange={e => this.setState({ eventname: e.target.value })}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="date"></Label>
                <Input
                  type="datetime-local"
                  name="date"
                  onChange={e => this.setState({ eventdate: e.target.value })}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="place"></Label>
                <Input
                  type="text"
                  name="place"
                  placeholder="Missä"
                  onChange={e => this.setState({ eventplace: e.target.value })}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="description"></Label>
                <Input
                  type="textarea"
                  name="desc"
                  placeholder="Tapahtuman tiedot"
                  onChange={e =>
                    this.setState({ eventdescription: e.target.value })
                  }
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="sumbit"></Label>
                <Button
                  type="sumbit"
                  value="Add Event"
                  onClick={() => this.hideModal()}
                >
                  OK
                </Button>
                <Button className="closeBtn" onClick={this.hideModal}>Close</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default AddEvent;
