import React, { Component } from 'react'

export default class DeleteEvent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            events: [],
            eventid: ""
        }
    }

    componentDidMount() {
        fetch("http://localhost:9000/home")
        .then(res => res.json())
  
        .then(data => {
          this.setState({ events: data });
        })
        .catch(err => err);
    }

    handleSumbit(id) {


        fetch('http://localhost:9000/home', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
                eventid: id
            })

        })
            .then(res => res.json()
            )


            .then(console.log("success"))

    }

    render() {
        return (
      
        )
    }
}
