import React, {Component} from 'react';
import {Container, Navbar} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Container>
                <Navbar>
                    <Navbar.Brand href="#home">
                        <img src="images/logo.png" width="170" height="50" alt="Infosys logo"/>
                    </Navbar.Brand>
                </Navbar>
            </Container>
        );
    }
}


export default Header;
