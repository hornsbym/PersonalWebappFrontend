import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location,
            id: this.props.id
        }
    }

    componentWillMount() {
        this.getPdf()
    }

    getPdf = () => {
        var data = { location: this.state.location }

        const params = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('/getFile', params)
            .then(res => res.json())
            .then(data => {
                console.log(this.state.location, data)
                var buffer = new Buffer(data)
                this.setState({ buffer: buffer })
                this.setPdf()
            });
    }

    setPdf = () => {
        var b64encoded = btoa(String.fromCharCode.apply(null, this.state.buffer));
        var datapdf = "data:application/pdf;base64," + b64encoded;
        this.setState({ pdf: datapdf })
    }

    openPdf = () =>{
        var viewer = document.getElementById("PDFViewer")
        viewer.src = this.state.pdf
        viewer.title = this.state.location
        viewer.style.width = "100%"
        viewer.style.height = "500px"

        var showButton = document.getElementById("showButton")
        var hideButton = document.getElementById("hideButton")
        showButton.style.display = "inline"
        hideButton.style.display = "inline"
    }

    render() {
        return (
            <Card>
                <Card.Title className ="storyTitle">{this.props.title}</Card.Title>
                <Card.Text className = "storyPreview">{this.props.description}</Card.Text>
            </Card>
        )
    }
}

export default Story;