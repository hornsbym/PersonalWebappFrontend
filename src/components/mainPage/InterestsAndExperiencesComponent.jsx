import React, { Component } from 'react'
import '../../styles.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class InterestsAndExperiencesComponent extends Component {
    render() {
        return(
            <Row id="interestsComponent">
                <Col>
                    <div className="d-flex justify-content-center">
                        <div>
                            <em><p>Experience with...</p></em>
                            <ul>
                                <li>Python, Java, Kotlin, JS, Dart</li>
                                <li>Android, Flutter, React</li>
                                <li>Node</li>
                                <li>Unity</li>
                                <li>AWS Certified Developer - Associate</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex justify-content-center">
                        <div>
                            <em><p>Interested in...</p></em>
                            <ul>
                                <li>Game development</li>
                                <li>Full-stack web development</li>
                                <li>Cross-platform mobile development</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default InterestsAndExperiencesComponent;