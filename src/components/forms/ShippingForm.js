import React, { useState } from 'react';
import {  Button, Form, Row, Col } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './css/SignUp.css';

const SignUp = () => {

    const [firstName, setFistName] = useState('');
    const [validated, setValidated] = useState(false);
        // this.state = {
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     address: {},
        //     creditCard: null

        // };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        };
        
    const addFirstName = (event) => {
        setFistName(event.target.value)
    }

    return(

        <div>
        Shipping Address 
        <hr></hr>
            <div className="shippingForm">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    &nbsp;&nbsp; Name*
                    <Col className="name">
                        <Form.Row>
                            <Form.Group as={Col} xs="5" controlId="validationCustom03">
                                <Form.Control id="short"  type="text" placeholder="First Name" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a first name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} xs="5" controlId="validationCustom03">
                                <Form.Control id="short"  type="text" placeholder="Last Name" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a last name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                        &nbsp;&nbsp; Address*
                    <Col className="address">
                        <Form.Row>
                            <Form.Group as={Col} md="10" controlId="validationCustom03">
                                <Form.Control id="long" type="text" placeholder="Street Address" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a street address.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} xs="5" controlId="validationCustom03">
                            <Form.Control id="short"   type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a zip code.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select" id="short" defaultValue="noState">
                            <option>State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            </Form.Control>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6"  controlId="validationCustom03">
                                <Form.Control id="short"  type="text" placeholder="Postal/Zip Code" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a city.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                    &nbsp;&nbsp; Email*
                    <Col className="email">
                        <Form.Row>
                            <Form.Group as={Col} xs="5" controlId="validationCustom03">
                                <Form.Control id="short"  type="email" placeholder="example@example.com" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                    &nbsp;&nbsp; Phone Number
                    <Col className="email">
                        <Form.Row>
                            <Form.Group as={Col} xs="5" controlId="validationCustom03">
                                <Form.Control id="short"  type="email" placeholder="example@example.com" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                    </Col>
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
    );
}
    


export default SignUp;