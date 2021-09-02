import React from 'react'
import { Modal, Button, Table, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';


export default function Assignments() {
    const [showTable, setShowTable] = useState(false);
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
            <Button variant="primary" onClick={handleShow}>
                Assignments
            </Button>

            <Modal show={showTable} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Assignment Title</th>
                                <th>Assignment Text</th>
                                <th>Due Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td><RiDeleteBin6Line /></td>
                                <td onClick={handleForm}><FaRegEdit /></td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td><RiDeleteBin6Line /></td>
                                <td onClick={handleForm}><FaRegEdit /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td><RiDeleteBin6Line /></td>
                                <td onClick={handleForm}><FaRegEdit /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
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
