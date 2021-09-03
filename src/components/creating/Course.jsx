import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './creating.css'

export default function Course() {
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
                Create New Course
            </Button>
            <Modal show={showForm} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control className="ass-title" type="email" placeholder="Course Name" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Control className="ass-text" type="password" placeholder="Course Descreption" />
                        </Form.Group>
                            <div>
                                <Button className="c-button" onClick={handleClose}>
                                    Create Course
                                </Button>
                            </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
