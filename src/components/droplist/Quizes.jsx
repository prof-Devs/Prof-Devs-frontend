import React,{useContext} from 'react'
import { Modal, Button, Table, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import CourseObject from '../../context/CourseContext';
import { CourseContextProv } from '../../context/CourseContext';
import { DropContext } from "../../context/dropListContext";

export default function Assignments() {
    const [showTable, setShowTable] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const listContext = useContext(DropContext);


    function handleShow() {
        setShowTable(true);
    }

    function handleClose() {
        setShowTable(false);
    }

    function handleForm() {
        setShowForm(true);
        setShowTable(false);
    }

    function handleClose1() {
        setShowForm(false);
        setShowTable(false);
    }
console.log('iiiii',listContext.allCoursequiz);
    return (
        <>
            <Modal size="lg" centered="true" show={showTable} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>* See quizes *</h1>
                    </Modal.Title>

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Quiz Title</th>
                                <th>timer</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tr>
                                    <td>Quiz</td>
                                    <td>2</td>
                                    <th><FaRegEdit /></th>
                                    <th><RiDeleteBin6Line /></th>
                                </tr>

                        {listContext?.allCoursequiz?.map(ele => {
                            <tbody>
                                <tr>
                                    <td>{ele.title}</td>
                                    <td>{ele.timer}</td>
                                    <td onClick={handleForm}><FaRegEdit /></td>
                                    <td><RiDeleteBin6Line /></td>
                                </tr>
                            </tbody>
                        })}
                    </Table>
                </Modal.Body>
            </Modal>
            <Modal show={showForm} onHide={handleClose1} animation={false}>
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
                            <Button id="ass-button" onClick={handleClose1}>
                                Edit Quiz
                            </Button>
                        </div>
                    </div>
                </Form>
            </Modal>
        </>
    )
}
