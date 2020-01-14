import React, { Component } from 'react';
import {
    Button, ButtonToolbar

} from 'reactstrap';
import Overlay from '../Overlay';

function Event(props) {
    const [modalShow, setModalShow] = React.useState(false);

    
    
    return (
        //Laatikko missä näkyy tapahtuman nimi ja päivä
        <ButtonToolbar>
            <Button variant="primary" className="event-box" onClick={() => setModalShow(true)}>
                <img src="http://www.downloadclipart.net/thumb/23297-button-orange-small-vector-thumb.png" ></img>
                <br/>
                Tapahtuman nimi:  {props.getName}
                <br/>
                Päivänmäärä: {props.getDate}
            </Button>

            <Overlay
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </ButtonToolbar>

    );
}




export default Event;