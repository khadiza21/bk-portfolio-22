import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import sign from '../../../images/cocosign.png'

const About = () => {
    return (
        <Container className="shadow rounded my-5 py-5">
           
            <Row className="g-4 px-4 ">
                <Col className="rounded shadow " style={{ backgroundColor: 'gray' }} xs={12} md={4} sm={12}>
                    <div  className=" my-4" >
                        <h5> Personal Details</h5>
                        <hr/>
                        {/* <h6>Email: bibikhadiza474@gmail.com</h6> */}
                        <h6>Languages: Bengli, English</h6>
                        <h6>Nationality: Bangladeshi</h6>
                        <h6>Phone: (+880)1816260539</h6>
                    </div>




                </Col>
                <Col xs={12} md={7} sm={12}>
                     <h2 className="fw-bold">About Me</h2>
                    <h4>I am Web & MERN Stack Developer.</h4>
                    <p>Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <img src={sign} className="img-fluid w-25" alt="" />

                </Col>

            </Row>

        </Container>
    );
};

export default About;