import React, { useRef } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import emailjs from 'emailjs-com'
import './Contact.css';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_fcw2scm', 'template_npae9y9', form.current, 'CQ5OKwfRskTWUvM5e')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
        toast('Email send')
    }

    return (
        <div>
            <div className="d-flex justify-items-center align-items-center">
                <Form ref={form} onSubmit={sendEmail} className="container my-5 py-5 w-75">
                    <Bounce top>
                        <h3 className="text-dark">

                            Contact Me With Email!
                        </h3>
                    </Bounce>
                    <Bounce bottom>
                        <p style={{ color: "gray" }} className="fw-bold my-4">
                            I will be glad to assist you in any question and encourage you to
                            share your ideas and improvements with me.
                        </p>
                    </Bounce>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="fw-bold">Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Email </Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label className="fw-bold">Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>

                    <Form.Label className="fw-bold">Message </Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Message">
                        <Form.Control
                            as="textarea"
                            placeholder="Message"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>

                    <Button
                        className="btn w-100 my-3 fw-bold"
                        variant="btn"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </div>


        </div>
    );
};

export default Contact;