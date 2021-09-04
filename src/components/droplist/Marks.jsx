import React,{useContext} from 'react'
import { Modal, Button, Table, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { CourseContextProv } from '../../context/CourseContext';


export default function Assignments() {
    const [showTable, setShowTable] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const CourseObject = useContext(CourseContextProv);

    // setshowTableDropMarks,showTableDropMarks

    // function handleShow() {
    //     setShowTable(true);
    // }

    function handleClose() {
        CourseObject.setshowTableDropMarks(false);
    }

    function handleForm() {
        setShowForm(true);
        CourseObject.setshowTableDropMarks(false);
    }

    function handleClose1() {
        setShowForm(false);
        CourseObject.setshowTableDropMarks(true);

    }
    

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Marks
            </Button> */}

            <Modal size="lg" centered="true" show={CourseObject.showTableDropMarks} onHide={handleClose} animation={false}>
                <Modal.Body>
                <Modal.Title id="contained-modal-title-vcenter">
                        <h1>* See marks *</h1>
                    </Modal.Title>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Grade</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td onClick={handleForm}><FaRegEdit /></td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td onClick={handleForm}><FaRegEdit /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td onClick={handleForm}><FaRegEdit /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>

                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button> */}
            </Modal>
            <Modal show={showForm} onHide={handleClose1} animation={false}>
                <Form>
                    <Form.Label>
                        helloo
                    </Form.Label>
                    <Form.Control>
                    </Form.Control>
                    <Button onClick={handleClose1}>Save Changes</Button>
                </Form>
            </Modal>
        </>
    )
}
