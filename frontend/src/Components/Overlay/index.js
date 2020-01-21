import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from "react-bootstrap";
import moment from "moment";
import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {

  },
}));


const Overlay = (props) => {
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
          className = {classes.media}
          image = "https://www.sumikshamart.com/wp-content/uploads/2019/06/orange-200x200.png"
          title = "orange"
        />

        
      <CardContent>
        <div key={props.eventid}>
          <p>
            <b>Mitä: {props.eventname} </b>
            <br />
            <b>Missä: {props.eventplace} </b>
            <br />
            <b>Milloin: {moment(props.eventdate).format("D MMMM YYYY HH.mm")} </b>
            <br />
            <b>Lisätiedot: {props.eventdescription}</b>
          </p>
        </div>
      </CardContent>
      </Card>
    </Modal>
  );
};

export default Overlay;
