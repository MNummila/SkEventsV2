import React, { useState } from "react";

import Overlay from "../Overlay";
import moment from "moment";
import {Button} from "@material-ui/core";

const Event = props => {
  const [modalShow, setModalShow] = useState(false);


  return (
    //Laatikko missä näkyy tapahtuman nimi ja päivä
    <div id = "boxesGroup" style={{
      background: "linear-gradient(to top, #ff9900 0%, #ffcc00 100%)",
      boxShadow: "10px 10px 5px grey",
      borderRadius: "10px"

    }}>
      <Button
        variant="primary"
        className="event-box"
        onClick={() => setModalShow(true)}
        style={{textTransform: "none"}}
      >
        <div key={props.eventid}>
          
          <p id="eventName" style ={{
            fontFamily: "Roboto",
            fontSize: "1.3em",
            color: "#660066"
          }}>
          {props.eventname}
          </p>

          <p style={{
            fontWeight: "bold",
            fontSize: "1.15em",
            color: "#003366"
          }}>{moment(props.eventdate).format("DD. MMMM YYYY HH:mm")}</p>
          <br/>
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
      </div>

  );
};

export default Event;
