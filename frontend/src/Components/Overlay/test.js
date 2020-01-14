import React, { Component } from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';



class ModalForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            title: 'Lisää tapahtuma'
        }
    }

    toggle = () => {
        this.setState(prevState => {
            modal: !prevState.modal
        });
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>



        return(

            <Modal
            isOpen={this.state.modal}
            toggle = {this.toggle}
            className = {this.props.className}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <ModalHeader toggle={this.toggle} close={closeBtn}>
              {this.state.title}
            </ModalHeader>
            <ModalFooter>
              <Button onClick={this.state.modal}>X</Button>
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
}

export default ModalForm;