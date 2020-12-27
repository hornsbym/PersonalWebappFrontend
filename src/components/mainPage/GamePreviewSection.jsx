import React, { Component } from 'react';
import '../../styles.scss'
import Container from 'react-bootstrap/Container';

class GamePreviewSection extends Component {
    render() {
        return(
            <section>
                <Container>
                    {this.props.gamePreviewComponents}
                </Container>
            </section>
        )
    }
}

export default GamePreviewSection