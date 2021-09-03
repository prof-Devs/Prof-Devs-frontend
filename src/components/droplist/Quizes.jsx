import React from 'react'
import { Modal, Button, Table, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import FormRange from 'react-bootstrap/esm/FormRange';
import CourseObject from '../../context/CourseContext';
import { CourseContextProv } from '../../context/CourseContext';

export default function Assignments() {
    const [showTable, setShowTable] = useState(true);
    const [showForm, setShowForm] = useState(false);



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
        setShowTable(true);
    }

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
                                <th>Due Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>3</td>
                                <td><RiDeleteBin6Line /></td>
                                <td onClick={handleForm}><FaRegEdit /></td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3</td>
                                <td><RiDeleteBin6Line /></td>
                                <td onClick={handleForm}><FaRegEdit /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3</td>
                                <td><RiDeleteBin6Line /></td>
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
