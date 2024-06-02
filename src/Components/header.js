import React from 'react';
import '../Styles/header.css';
import '../App.css';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../AuthContext';

export const Header = () => {
    const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };
    return (
        <div className="navbar-container">
        <Navbar expand="lg" className="bg-body-tertiary navbar-subcontainer"  sticky="top">
            <Row className="navbar-row">
                <Col sm = {2} md={2} lg={2}>
                    <Navbar.Brand className="logo-text" href="/">safeHER</Navbar.Brand>
                </Col>
                <Col>
                    <Nav className="d-flex justify-content-end">
                        <Nav.Link className="navbar-text" href="/">Home</Nav.Link>
                        <Nav.Link className="navbar-text" href="/team">About</Nav.Link>
                        <Nav.Link className="navbar-text" href="/resources">Resources</Nav.Link>
                        <Nav.Link className="navbar-text" href="/rant">Rant Bot</Nav.Link>
                        <Nav.Link className="navbar-text" href="/blog">Blog</Nav.Link>
                        <Nav.Link className="navbar-text" href="/art">Art</Nav.Link>
                        <Nav.Link className="navbar-text" href="/dataViz">Data Visualization</Nav.Link>
                        {user ? (
                            <Nav.Link className="navbar-text" onClick={handleLogout}>Logout</Nav.Link>
                        ) : (
                            <Nav.Link className="navbar-text" href="login">Login</Nav.Link>
                        )}
                    </Nav>
                </Col>
            </Row>
        </Navbar>
        </div> 
    )
}

export default Header;