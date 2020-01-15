import React, { Component, useState, useEffect } from 'react';
import {
    Button, ButtonToolbar

} from 'react-bootstrap';
import Overlay from '../Overlay';

const Event = (props) => {

    const [modalShow, setModalShow] = useState(false);
    
    const date = () => {
        
    }
    return (

        //Laatikko missä näkyy tapahtuman nimi ja päivä
        <ButtonToolbar>
            <Button variant="primary" className="event-box" onClick={() => setModalShow(true)}>
                
                <div key={props.eventid}>
                    <p>{props.eventname}</p>
                    
                    <p>{props.eventdate}</p>
                </div>
            </Button>


            <Overlay
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </ButtonToolbar>

    );
}




export default Event;