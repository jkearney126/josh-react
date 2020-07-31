import React from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

const NavBar = props => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="navbar-logo">
                Josh's Sample App
            </Navbar.Brand>
            <Nav className="navbar-nav">
                {props.routes.map( route => (
                    <Link to={route.path}>{route.name}</Link>
                ))}
            </Nav>
        </Navbar>
    )
}

export default NavBar;