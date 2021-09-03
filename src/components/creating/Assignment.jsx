import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './creating.css'

export default function Assignment() {
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
                Create Assignment
            </Button>
            <Modal show={showForm} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control className="ass-title" type="email" placeholder="Assignment Title" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Control className="ass-text" type="password" placeholder="Assignment Text" />
                        </Form.Group>
                        <div className="row-ass">
                            <div>
                                <Form.Group>
                                    <Form.Label>Due Date</Form.Label>
                                    <Form.Control className="ass-date" type="date" />
                                </Form.Group>
                            </div>
                            <div>
                                <Button className="ass-button" onClick={handleClose}>
                                    Create Assignment
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>





        </div>
    )
}
