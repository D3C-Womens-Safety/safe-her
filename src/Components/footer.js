import React from 'react';
import '../Styles/footer.css';
import '../App.css';
import { Row, Col, Navbar } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';


export const Footer = () => {
    return (
        // <div className="footer">
        //     <div className="footer-col">
        //     <h4>Submissions</h4>
        //     <ul>
        //         <li><a href="#">Email us</a></li>
        //         <li><a href="#">blahblah@gmail.com</a></li>
        //     </ul>
        //     </div>

        //     <div className="footer-col">
        //     <h4>Contact</h4>
        //     <ul>
        //         <li><a href="#">linkedin</a></li>
        //         <li><a href="#">instagram</a></li>
        //     </ul>
        //     </div>

        //     <div className="footer-col">
        //     <h4>misc</h4>
        //     <ul>
        //         <li><a href="#">suggestions</a></li>
        //         <li><a href="#">d3c</a></li>
        //     </ul>
        //     </div>
        // </div>
        <div className="footer-container">
            <Navbar sticky='bottom'>
                <Row className="w-100">
                    <Col>
                        <Navbar.Brand className="logo-text" href="/">safeHER</Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar.Brand className="logo-text">Copyright @ safeHER</Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar.Brand className="logo-text" href="https://www.instagram.com/d3cdavis/"><Instagram /></Navbar.Brand>
                    </Col>
                </Row>

            </Navbar>
        </div>
    )
}

// export default Home;