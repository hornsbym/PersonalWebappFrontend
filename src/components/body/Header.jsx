import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class Header extends Component {
    componentWillMount(){
        this.getPicture()
    }

    getPicture = () => {
        var data = { location: "profile.jpg" }

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
                console.log("profile.jpg",data)
                var buffer = new Buffer(data)
                this.setState({buffer:buffer})
                this.displayPicture()
            });
    }

    displayPicture = () =>{
        var b64encoded = btoa(String.fromCharCode.apply(null, this.state.buffer));
        var datajpg = "data:image/jpg;base64," + b64encoded;
        document.getElementById("profile").src = datajpg;
    }

    render() {
        return (
            <Container>
                <Row id="name">
                    <h1>Mitchell Hornsby</h1>
                </Row>
                <Row>
                    <img id="profile"></img>
                </Row>
                <Row>
                    <Container>
                        <p className="bioLine">Washington and Lee University Class of 2019</p>
                        <p className="bioLine">Computer Science major/Creative Writing minor</p>
                    </Container>    
                </Row>
            </Container>
        )
    }
}

export default Header;