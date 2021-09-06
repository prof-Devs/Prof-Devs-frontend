import React, { useContext } from 'react'
import { Modal, Col, Row, Table, Form, Button } from "react-bootstrap";
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
        CourseObject.setshowTableDropMarks(false);

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


            </Modal>
            <Modal show={showForm} onHide={handleClose1} animation={false}>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label> Student name </Form.Label>
                        </Col>
                        <Col>
                            <Form.Control placeholder="mark" />
                        </Col>
                    </Row>
                </Form>
                <Button variant="secondary" onClick={handleClose1}>
                    Edit Mark
                </Button>
            </Modal>
        </>
    )
}
