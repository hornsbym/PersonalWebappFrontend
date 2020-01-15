import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: `${this.props.id}`,
            pictureLocations: this.props.pictureLocations,
            link: this.props.link,
            buffers: []
        }
    }

    componentWillMount() {
        this.gatherPictures()
    }

    fetchPicture = (params, i) => {

        fetch('/getFile', params)
        .then(res => res.json())
        .then(data => {
            var buffer = new Buffer(data)
            this.setState({ buffers: [...this.state.buffers, buffer] })
        })
        .then(data => {
            this.displayPicture(i)});
    }

    gatherPictures = () => {
        console.log("pictureLocations:",this.state.pictureLocations)
        for (var i = 0; i < this.state.pictureLocations.length; i++) {
            console.log(this.state.id+" i:",i)
            var data = { location: this.state.pictureLocations[i] }

            const params = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            console.log(this.state.id+" fetching:", i, "\nData:",data)
            this.fetchPicture(params, i)
        }
    }

    displayPicture = (i) => {
        var b64encoded = btoa(String.fromCharCode.apply(null, this.state.buffers[i]));
        var datajpg = "data:image/jpg;base64," + b64encoded;

        var img = document.createElement("img")   // Creates an new image html element
        var id  = this.state.id+"-"+i.toString()
        img.setAttribute("class","projectImage") 
        img.setAttribute("id",this.state.id+"-"+i.toString())

        img.src = datajpg;                        // Puts the picture in the image element

        document.getElementById("c"+this.state.id).appendChild(img) // Adds image element to document

    }

    resizePicture = (i) => {
        var picture = document.getElementById(this.state.id+"-"+i.toString())
        var imageWidth = picture.clientWidth
        var screenWidth = window.screen.availWidth
        if (imageWidth > screenWidth * .6) {
            picture.setAttribute("width", "60%")
        }
    }

    render() {
        return (
            <Card>
                <Card.Img varient="top" id={"c" + this.state.id}></Card.Img>
                <Card.Body>
                    <Card.Title className="projectLink">
                        <a href={this.state.link}>{this.props.title}</a>
                    </Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default Project;