import React, {Component} from 'react';
import { Navbar, Nav, NavItem,Container,NavbarLeft } from 'react-bootstrap';

class Header extends Component{
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