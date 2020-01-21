import React, { useState } from "react";

import Overlay from "../Overlay";
import moment from "moment";
import {Button, ButtonGroup} from "@material-ui/core";

const Event = props => {
  const [modalShow, setModalShow] = useState(false);


  return (
    //Laatikko missä näkyy tapahtuman nimi ja päivä
    <ButtonGroup  id = "boxesGroup" style={{backgroundColor: "orange"}}>
      <Button
        variant="primary"
        className="event-box"
        onClick={() => setModalShow(true)}
        style={{textTransform: "none"}}
      >
        <div key={props.eventid}>
          
          <p id="eventName">{props.eventname}</p>

          <p>{moment(props.eventdate).format("DD. MMMM YYYY HH:mm")}</p>
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
    </ButtonGroup>
  );
};

export default Event;
