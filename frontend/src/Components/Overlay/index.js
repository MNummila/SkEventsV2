import React, { useState, setShow } from 'react';
import { Button, Modal, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';

const Overlay = (props) => {


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
    <ModalTitle closeButton>
      {props.title}
    </ModalTitle>
    <ModalFooter>
      <Button onClick={props.onHide}>X</Button>
    </ModalFooter>
    <ModalBody>
      <h4></h4>
      <p>
        <b>Mitä: </b>
        <br/>
        <b>Missä: </b>
        <br/>
        <b>Milloin: </b>
        <br/>
        <b>Mitä ja miten maksetaan?</b>
        <br/>
        <b>Dc: </b>
        <br/>
        <b>Jatkot: </b>
      </p>
    </ModalBody>
    
  </Modal>
); 
         
  
}

export default Overlay;