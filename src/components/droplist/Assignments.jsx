import React, { useContext, useState, useEffect } from 'react'
import { Modal, Button, Table, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseContextProv } from '../../context/CourseContext';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { AuthContext } from "../../context/authContext";
import { DropContext } from "../../context/dropListContext";
import axios from 'axios'
import './dropList.css'

export default function Assignments() {
  let  tbodyTable=  document.getElementsByClassName('hiddenID');

    const CourseObject = useContext(CourseContextProv);
    const authContext = useContext(AuthContext);
    const listContext = useContext(DropContext);

    const [showForm, setShowForm] = useState(false);
    const [showTable, setShowTable] = useState(true);



    function handleClose() {
        setShowTable(false);
    }
    function handleClose1() {
        setShowForm(false);
        setShowTable(false);
    }
    function handleForm() {
        setShowForm(true);
        setShowTable(false);
        // setUpdateID(id)
        // console.log('state',id);
    }


    return (
        <>
            <Modal size="lg" centered="true" show={showTable} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>* See assignments *</h1>
                    </Modal.Title>
                    <Table responsive>
                        <thead>
                            <tr >
                                <th>Assignment Title</th>
                                <th>Assignment Text</th>
                                <th>Due Date</th>
                                <th class='hiddenID'>id</th>
                                <th></th>
                            </tr>
                        </thead>
                        {listContext.allAssignments.map(element => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{element.title}</td>
                                        <td>{element.text}</td>
                                        <td>{element.due_date}</td>
                                        <td><FaRegEdit onClick={handleForm} /></td>
                                        <td><RiDeleteBin6Line onClick={() => listContext.deleteAssignment(element._id)}/></td>
                                    </tr>
                                </tbody>
                            )
                        })
                        }

                    </Table>
                </Modal.Body>

                {/* <Button variant="secondary" onClick={CourseObject.handleCloseDropAss}>
                    Close
                </Button> */}
            </Modal>
            <Modal show={showForm} onHide={handleClose1} animation={false}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1>* Edit The Assignment *</h1>
                </Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control className="ass-title" type="text" placeholder="Assignment Title" onChange={listContext.handleChangeAssignment} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Control className="ass-text" type="text" placeholder="Assignment Text" onChange={listContext.handleChangeAssignment} />
                        </Form.Group>
                        <div className="row-ass">
                            <div>
                                <Form.Group>
                                    <Form.Label>Due Date</Form.Label>
                                    <Form.Control className="ass-date" type="date" onChange={listContext.handleChangeAssignment} />
                                </Form.Group>
                            </div>
                            <div>
                                {/* <Button id="ass-button" onClick={() => { listContext.updateAssignmentHandler(updateID); handleClose1(); }}>
                                    Edit Assignment
                                </Button> */}
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
