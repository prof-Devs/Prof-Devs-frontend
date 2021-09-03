import React, { useContext } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseObject from '../../context/CourseContext';
import { CourseContextProv } from '../../context/CourseContext';
import './creating.css'

export default function Assignment() {

    const CourseObject = useContext(CourseContextProv);
    return (

        <div className="ass-container">
            <Modal size="lg" centered="true" show={CourseObject.showAssignmentForm} onHide={CourseObject.handleAssignmentClose} animation={false}>
                <Modal.Body>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>* Create assignment *</h1>
                    </Modal.Title>
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
                                <Button id="ass-button" onClick={CourseObject.handleAssignmentClose}>
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
