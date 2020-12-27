import React, { Component } from 'react';
import '../../styles.scss'
import Container from 'react-bootstrap/Container';
import Header from "../Header.jsx"
import AboutMeComponent from "./AboutMeComponent"
import InterestsAndExperiencesComponent from "./InterestsAndExperiencesComponent"
import ProfilePicture from "./ProfilePicture"

class IntroSection extends Component {
    render() {
        return(
            <section id="introSection">
                <Header />
                <Container>
                    <ProfilePicture />
                    <AboutMeComponent />
                    <InterestsAndExperiencesComponent />
                </Container>
            </section>
        )
    }
}

export default IntroSection;