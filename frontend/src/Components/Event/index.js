import React, { useState } from "react";

import Overlay from "../Overlay";
import moment from "moment";
import {Button, ButtonGroup} from "@material-ui/core";

const Event = props => {
  const [modalShow, setModalShow] = useState(false);

  return (
    //Laatikko missä näkyy tapahtuman nimi ja päivä
    <ButtonGroup style={{backgroundColor: "orange", marginTop: "10px", marginRight: "10px" }}>
      <Button
        variant="primary"
        className="event-box"
        onClick={() => setModalShow(true)}
      >
        <div key={props.eventid}>
          <p>{props.eventname}</p>

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
