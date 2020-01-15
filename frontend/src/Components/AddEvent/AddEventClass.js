import React, { Component } from 'react'

import { FormGroup, Input, Label, Form, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class AddEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventname: '',
            eventdate: '',
            eventplace: '',
            eventdescription: ''
        }

        
    }



    handleSumbit(event) {
        event.preventDefault();
        fetch("http://localhost:9000/home", {
            method: 'post',
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then((data) => {
                console.log("Success");
            })
            .catch(err => {
                console.error(err);
            })

    }


    componentDidMount() {
        console.log("Success");
    }

    render() {



        return (
            <div className="addEv">
                <Button id="addEventButton" >
                    Lisää tapahtuma
                </Button>
                <Modal>
                    <ModalHeader>Lisää tapahtuma</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSumbit} >
                            <FormGroup>
                                <Label for="Title"></Label>
                                <Input type="text" name="name" placeholder="Tapahtuman nimi"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date"></Label>
                                <Input type="date" name="date" ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="place"></Label>
                                <Input type="text" name="place" placeholder="Missä"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="description"></Label>
                                <Input type="textarea" name="desc" placeholder="Tapahtuman tiedot"></Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter >
                        <Button >
                            OK

                        </Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}
export default AddEvent;