import React, { useContext, useState } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CourseContextProv } from "../../context/CourseContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AuthContext } from "../../context/authContext";
import { DropContext } from "../../context/dropListContext";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
import "./dropList.css";

export default function Assignments() {
  let tbodyTable = document.getElementsByClassName("hiddenID");
  let { courseId } = useParams();
  const CourseObject = useContext(CourseContextProv);
  const authContext = useContext(AuthContext);
  const listContext = useContext(DropContext);
  const host = "https://profdev-academy.herokuapp.com";

  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [assignId, setAssignId] = useState("");
  const [assignmentInfo, setAssignmentInfo] = useState({
    title: "",
    text: "",
    due_date: "",
  });

  function handleChangeAssignment(e) {
    let value = e.target.value;
    let name = e.target.name;
    setAssignmentInfo({
      ...assignmentInfo,
      [name]: value,
    });
  }

  function handleClose() {
    setShowTable(false);
  }
  function handleClose1() {
    setShowForm(false);
    setShowTable(false);
  }
  function handleForm(id) {
    setShowForm(true);
    setShowTable(false);
    setAssignId(id);
  }

  const token = authContext.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function deleteAssignment(id) {
    listContext.allCourseAssignment?.map(async (element) => {
      if (element._id === id) {
        await axios.delete(`${host}/assignment/${id}`, config);

        if (courseId) {
          const dataGet = await axios.get(
            `${host}/course/teacher/${courseId}`,
            config
          );
          listContext.setAllCourseAssignment(dataGet.data.assignments);
        }
      }
    });
  }

  async function updateAssignment(id, e) {
    e.preventDefault();
    let obj = {
      title: assignmentInfo.title,
      text: assignmentInfo.text,
      due_date: assignmentInfo.due_date,
    };

    listContext?.allCourseAssignment?.map(async (element) => {
      if (element._id === id) {
        console.log(obj, "assignmentInfo");
        await axios.put(`${host}/assignment/${id}`, obj, config);

        if (courseId) {
          const dataGet = await axios.get(
            `${host}/course/teacher/${courseId}`,
            config
          );
          listContext.setAllCourseAssignment(dataGet.data.assignments);
          handleClose1();
        }
      }
    });
  }

  return (
    <>
      <Modal
        size="lg"
        centered="true"
        show={showTable}
        onHide={handleClose}
        animation={false}
      >
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
                <th class="hiddenID">id</th>
                <th></th>
              </tr>
            </thead>

            {listContext?.allCourseAssignment?.map((element) => {
              return (
                <tbody>
                  <tr>
                    <td>
                      <Link to={`/assignment/${courseId}/${element._id}`}>
                        {element.title}
                      </Link>
                    </td>
                    <td>{element.text}</td>
                    <td>{element.due_date}</td>
                    {authContext?.role === "editor" && (
                      <>
                        <td>
                          <FaRegEdit onClick={() => handleForm(element._id)} />
                        </td>
                        <td>
                          <RiDeleteBin6Line
                            onClick={() => deleteAssignment(element._id)}
                          />
                        </td>
                      </>
                    )}
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </Modal.Body>

        {/* <Button variant="secondary" onClick={CourseObject.handleCloseDropAss}>
                    Close
                </Button> */}
      </Modal>
      <Modal
        size="lg"
        centered="true"
        show={showForm}
        onHide={handleClose1}
        animation={false}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>* Edit The Assignment *</h1>
        </Modal.Title>
        <Modal.Body>
          <Form onSubmit={(e) => updateAssignment(assignId, e)}>
            <Form.Group>
              <Form.Control
                className="ass-title"
                type="text"
                name='title'
                placeholder="Assignment Title"
                onChange={handleChangeAssignment}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="ass-text"
                type="text"
                name='text'
                placeholder="Assignment Text"
                onChange={handleChangeAssignment}
              />
            </Form.Group>
            <div className="row-ass">
              <div>
                <Form.Group>
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    className="ass-date"
                    type="date"
                    name='due_date'
                    onChange={handleChangeAssignment}
                  />
                </Form.Group>
              </div>
              <div>
                <Button id="ass-button" type="submit">
                  Edit Assignment
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
