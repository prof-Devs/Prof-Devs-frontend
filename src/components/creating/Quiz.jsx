import React,{useContext} from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseObject from '../../context/CourseContext';
import { CourseContextProv } from '../../context/CourseContext';
import './creating.css'

export default function Quiz() {

    const CourseObject = useContext(CourseContextProv);
    return (
        <div className="ass-container">
 
            <Modal size="lg" centered="true" show={CourseObject.showForm} onHide={CourseObject.handleClose} animation={false}>
                <Modal.Body>
                <Modal.Title id="contained-modal-title-vcenter">
                        <h1>* Create quiz *</h1>
                    </Modal.Title>
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
                            <Button id="add-button">Add Question</Button>
                        </Form.Group>


                        <div className="row-ass">
                            <div>
                                <Form.Group>
                                    <Form.Label></Form.Label>
                                    <Form.Control className="q-date" type="number" placeholder="Duration (in minutes)" />
                                </Form.Group>
                            </div>
                            <div>
                                <Button id="ass-button" onClick={CourseObject.handleClose}>
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
