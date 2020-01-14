import React, { Component, useState, setShow } from 'react'

import { FormGroup, Input, Label, Form, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


function AddEvent(props) {

    

    const [modal, setModal] = useState(false);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    const toggle = () => setModal(!modal);
    return (
        <div className="addEv">
            <Button id="addEventButton" onClick={toggle}>
                Lisää tapahtuma
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Lisää tapahtuma</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="Title"></Label>
                            <Input type="text" name="name" placeholder="Tapahtuman nimi"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="date"></Label>
                            <Input type="date" name="date" ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for ="place"></Label>
                            <Input type="text" name="place"  placeholder="Missä"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description"></Label>
                            <Input type="textarea" name="desc" placeholder="Tapahtuman tiedot"></Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter >
                    <Button onClick={toggle}>
                        OK
                        
                </Button>
                </ModalFooter>
            </Modal>
        </div>

    );
}

export default AddEvent;