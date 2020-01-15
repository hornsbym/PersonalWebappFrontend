import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Story from "./Story"
import content from "./content.json"

class Writing extends Component {
    constructor(props){
        super(props);
        this.state = {
            stories: []
        }

    }
    componentWillMount(){
        this.getStories()
    }

    getStories = () => {
        for(var i = 0; i < content.writing.length; i++) {
            var title = content.writing[i].title;
            var desc = content.writing[i].description;
            var location = content.writing[i].location;

            var story = <Story title={title} description={desc} location={location} id={"w"+i}/>
            this.addStory(story)
        }
    }

    addStory = (story) => {
        console.log("addStory called")
        this.setState(prevState => ({
            stories: [...prevState.stories, story]
        }))
    }

    render() {
        return (
             <Container className="Writing" id="writing">
                <Row>
                    <Col>
                        <h2>Writing Projects</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container>{this.state.stories}</Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Writing;