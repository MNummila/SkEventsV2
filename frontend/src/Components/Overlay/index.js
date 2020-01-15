import React, { useState, setShow } from "react";
import {
  Button,
  Modal,
  ModalTitle,
  ModalBody,
  ModalFooter
} from "react-bootstrap";
import moment from "moment";

const Overlay = props => {
  const [modal, setModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalFooter>
        <Button onClick={props.onHide}>X</Button>
      </ModalFooter>
      <ModalBody>
        <div key={props.eventid}>
          <p>
            <b>Mitä: {props.eventname} </b>
            <br />
            <b>Missä: {props.eventplace} </b>
            <br />
            <b>Milloin: {moment(props.eventdate).format("D MMMM HH.mm")} </b>
            <br />
            <b>Lisätiedot: {props.eventdescription}</b>
          </p>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default Overlay;
