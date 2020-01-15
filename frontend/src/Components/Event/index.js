import React, { useState } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import Overlay from "../Overlay";
import moment from "moment";

const Event = props => {
  const [modalShow, setModalShow] = useState(false);

  return (
    //Laatikko missä näkyy tapahtuman nimi ja päivä
    <ButtonToolbar>
      <Button
        variant="primary"
        className="event-box"
        onClick={() => setModalShow(true)}
      >
        <div key={props.eventid}>
          <p>{props.eventname}</p>

          <p>{moment(props.eventdate).format("DD. MMMM HH:mm")}</p>
        </div>
      </Button>

      <Overlay
        show={modalShow}
        onHide={() => setModalShow(false)}
        eventid={props.eventid}
        eventname={props.eventname}
        eventdate={props.eventdate}
        eventplace={props.eventplace}
        eventdescription={props.eventdescription}
      />
    </ButtonToolbar>
  );
};

export default Event;
