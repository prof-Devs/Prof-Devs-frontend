import React,{useContext} from 'react'
import { Modal, Button, Table, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseObject from '../../context/CourseContext';
import { CourseContextProv } from '../../context/CourseContext';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';


export default function Assignments() {
    const CourseObject = useContext(CourseContextProv);
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Assignments
            </Button> */}
           
            {/* showTableDropAss,handleCloseDropAss,handleFormDropAss,handleClose1DropAss */}
            <Modal size="lg" centered="true" show={CourseObject.showTableDropAss} onHide={CourseObject.handleCloseDropAss} animation={false}>
                <Modal.Body>
                <Modal.Title id="contained-modal-title-vcenter">
                        <h1>* See assignments *</h1>
                    </Modal.Title>
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
                                <td onClick={CourseObject.handleFormDropAss}><FaRegEdit /></td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td><RiDeleteBin6Line /></td>
                                <td onClick={CourseObject.handleFormDropAss}><FaRegEdit /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td><RiDeleteBin6Line /></td>
                                <td onClick={CourseObject.handleFormDropAss}><FaRegEdit /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>

                {/* <Button variant="secondary" onClick={CourseObject.handleCloseDropAss}>
                    Close
                </Button> */}
            </Modal>
            {/* <Modal show={CourseObject.showFormDropAss} onHide={CourseObject.handleClose1DropAss} animation={false}>
                <Form>
                    <Form.Label>
                        helloo
                    </Form.Label>
                    <Form.Control>
                    </Form.Control>
                    <Button onClick={CourseObject.handleClose1DropAss}>Save Changes</Button>
                </Form>
            </Modal> */}
        </>
    )
}
