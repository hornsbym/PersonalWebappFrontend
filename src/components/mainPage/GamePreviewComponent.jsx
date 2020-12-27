import React, { Component } from 'react';
import '../../styles.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AWS_CONSTANTS from '../../aws_constants';
import Carousel from 'react-bootstrap/Carousel';

class GamePreviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carouselItems: [],
            titleComponent: null,
            descriptionComponents: null
        }
    }

    componentDidMount() {
        this.getPhotos()
        this.getTitleAndDescription()
    }

    async getTitleAndDescription() {
        await fetch(`${AWS_CONSTANTS.pathToBucket}/${this.props.gameName}/gameInformation.json`)
            .then(gameInformation => {
                return gameInformation.json()
            })
            .then(jsonGameInformation => {
                console.log("********** Game information: ")
                console.log(jsonGameInformation)

                let descriptionParagraphs = [];
                for (let paragraph of jsonGameInformation.gameDescriptionParagraphs) {
                    descriptionParagraphs.push(
                        <p className="gamePreviewParagraph">{paragraph}</p>
                    )
                }

                this.setState({
                    titleComponent: <h3>{jsonGameInformation.gameName}</h3>,
                    descriptionComponents: descriptionParagraphs
                })
            })
    }

    async getPhotos () {
        await fetch(AWS_CONSTANTS.getGamePhotosByNameApiUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            body: JSON.stringify({ gameName: this.props.gameName })
            })
        .then(response => {
            return response.json()
        })
        .then(jsonPhotoPathArray => {
            var carouselItems = []
            jsonPhotoPathArray.forEach(path => {
                carouselItems.push(
                    <Carousel.Item>
                        <img className="gamePreviewImage" src={path}></img>
                    </Carousel.Item>)
            })

            this.setState({
                carouselItems: carouselItems
            })
        })
        .catch(error => {
            console.log(`********** Error getting photo "${this.props.gameName}": `)
            console.log(error.statusCode, error.message)
        })
    }

    render() {
        var description = 
        <Col className="gamePreviewCol">
            <div className="gamePreviewText">
                {this.state.titleComponent}
                {this.state.descriptionComponents}
            </div>
        </Col>

        var previewCarousel = 
        <Col className="gamePreviewCol blueBackground">
            <div className="gamePreviewContent">
                <Carousel>
                    {this.state.carouselItems}
                </Carousel>
                <Row className="gameLinkRow justify-content-md-center">
                    <Col />
                    <Col md="auto">
                        {this.props.gameLink}
                    </Col>
                    <Col />
                </Row>
            </div>
            
        </Col>


        var columnArrangement;
        if (this.props.isLeft === true) {
            columnArrangement = 
            <Row className="gamePreviewRow">
                {previewCarousel}
                {description}
            </Row>
        } else {
            columnArrangement = 
            <Row className="gamePreviewRow">
                {description}
                {previewCarousel}
            </Row>   
        }

        return(
            columnArrangement
        )
    }
}

export default GamePreviewComponent