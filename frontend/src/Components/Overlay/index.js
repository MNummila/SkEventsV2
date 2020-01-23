import React from "react";
import { Button, Modal, ModalFooter } from "react-bootstrap";
import moment from "moment";
import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {}
}));

const deleteData = id => {
  
  fetch(`http://localhost:9000/home/` + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken")
      
    },
    body: JSON.stringify({
      "_id": id
    })
  })
    .then(res => res.json())
    .then(() => id.onHide)
    .then(window.location.reload())
    
    .catch(err => {
      console.log(err);
      window.alert("Et ole kirjautunut sisään!")
    })
}



const Overlay = props => {
  const classes = useStyles();
  
  

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
      <Card>
        <CardMedia
          className={classes.media}
          image="https://www.sumikshamart.com/wp-content/uploads/2019/06/orange-200x200.png"
          title="orange"
        />

        <CardContent>
          <div key={props.eventid}>
            <p>
              <b>Mitä: {props.eventname} </b>
              <br />
              <b>Missä: {props.eventplace} </b>
              <br />
              <b>
                Milloin: {moment(props.eventdate).format("D MMMM YYYY HH.mm")}{" "}
              </b>
              <br />
              <b>Lisätiedot: {props.eventdescription}</b>
            </p>
          </div>
        </CardContent>
      </Card>
      <div key={props.eventid} >
      <Button onClick={() => deleteData(props.eventid)} style={{width: "100%"}}>Delete</Button>
      </div>
    </Modal>
  );
};

export default Overlay;
