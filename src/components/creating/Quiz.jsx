import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './creating.css'

export default function Quiz() {
    const [showForm, setShowForm] = useState(false);

    function handleShow() {
        setShowForm(true);
    }

    function handleClose() {
        setShowForm(false);
    }

    return (
        <div className="ass-container">
            <Button variant="primary" onClick={handleShow}>
                Create Quiz
            </Button>
            <Modal show={showForm} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control className="ass-title" type="email" placeholder="Quiz Title" />
                        </Form.Group>
                        <Form.Text className="counter"> You Added (x) Questions</Form.Text>

                        <Form.Group >
                            <Form.Control className="q-text" type="text" placeholder="Question" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Control className="ass-title" type="text" placeholder="The correct answer" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Control className="options" type="text" placeholder="Option-1" />
                            <Form.Control className="options" type="text" placeholder="Option-2" />
                            <Form.Control className="options" type="text" placeholder="Option-3" />
                            <Button className="add-button">Add Question</Button>
                        </Form.Group>


                        <div className="row-ass">
                            <div>
                                <Form.Group>
                                    <Form.Label></Form.Label>
                                    <Form.Control className="q-date" type="number" placeholder="Duration (in minutes)" />
                                </Form.Group>
                            </div>
                            <div>
                                <Button className="ass-button" onClick={handleClose}>
                                    Create Quiz
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
