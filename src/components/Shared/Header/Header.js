import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const handleClickGithub = () => {
        window.open("https://github.com/khadiza21");
      };
    const handleClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/bb-khadiza/");
      };
    const handleClickTwiter = () => {
        window.open("https://twitter.com/bibi_khadiza21");
      };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="text-dark">
            <Container >
                <Navbar.Brand href="" className='fw-bold'>BB KHADIZA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav    className="mx-auto ">
                        {/* my-2 my-lg-0 */} 
                        {/* style={{ maxHeight: "100px" }} */}
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/skill">Skills</CustomLink>
                        <CustomLink to="/project">Projects</CustomLink>
                        <CustomLink to="/education">Education</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        <CustomLink to="/solution">Solutions</CustomLink>
                        <CustomLink to="/photography">Photography</CustomLink>
                    </Nav>
                    <Nav>
                     
                     
                        <CustomLink to="g" onClick={handleClickGithub}  ><i class="fa-brands fa-github"></i></CustomLink>
                        <CustomLink to="l" onClick={handleClickLinkedIn} ><i class="fa-brands fa-linkedin-in"></i></CustomLink>
                        <CustomLink to="t" onClick={handleClickTwiter} ><i class="fa-brands fa-twitter"></i></CustomLink>
                        {/* <a href="#deets"><i class="fa-brands fa-github"></i></a>
                        <a href="#deets"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#deets"><i class="fa-brands fa-twitter"></i></a> */}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;