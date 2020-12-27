import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Main from './main.jsx';
import Container from 'react-bootstrap/Container';

ReactDOM.render(
    <Container fluid>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Container>,
    document.getElementById('root')
);
