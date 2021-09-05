import React,{useContext} from 'react'
import { Modal,  Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseContextProv } from '../../context/CourseContext';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import './dropList.css'

export default function Assignments() {
  let  tbodyTable=  document.getElementsByClassName('hiddenID');

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
                            <tr >
                                <th>Assignment Title</th>
                                <th>Assignment Text</th>
                                <th>Due Date</th>
                                <th class='hiddenID'>id</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody class='tbodyTable'>
                            <tr >
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td class='hiddenID'>019238139182312908</td>
                                <td onClick={CourseObject.handleFormDropAss}><FaRegEdit /></td>
                                <td><RiDeleteBin6Line /></td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td onClick={CourseObject.handleFormDropAss}><FaRegEdit /></td>
                                <td><RiDeleteBin6Line /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td onClick={CourseObject.handleFormDropAss}><FaRegEdit /></td>
                                <td><RiDeleteBin6Line /></td>
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
