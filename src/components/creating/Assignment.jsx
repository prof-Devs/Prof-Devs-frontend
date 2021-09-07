import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CourseContextProv } from "../../context/CourseContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { DropContext } from "../../context/dropListContext";

import "./creating.css";

export default function Assignment() {
  const listContext = useContext(DropContext);

  let { courseId } = useParams();
  const [assignInfo, setAssignInfo] = useState({
    title: "",
    text: "",
    due_date: "",
  });

  const host = "https://profdev-academy.herokuapp.com";

  const authContext = useContext(AuthContext);

  const CourseObject = useContext(CourseContextProv);

  const token = authContext.token;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "due_date") {
      setAssignInfo({
        ...assignInfo,
        [name]: Date(value),
      });
    } else {
      setAssignInfo({
        ...assignInfo,
        [name]: value,
      });
    }
  }
  async function postAssignment() {
    console.log(assignInfo);

    console.log(listContext.allCourseAssignment,'hiiiiiiiiiii console');
    const assigndata = await axios.post(`${host}/assignment`,assignInfo, config);


    console.log(assigndata);
    const obj = {
      "courseAssignments": [
        ...listContext.allCourseAssignment,
        assigndata.data
      ],
    };
    console.log(obj,'new Obj');

    await axios.put(`${host}/course/${courseId}`, obj, config);
  }

  return (
    <div className="ass-container">
      <Modal
        size="lg"
        centered="true"
        show={CourseObject.showAssignmentForm}
        onHide={CourseObject.handleAssignmentClose}
        animation={false}
      >
        <Modal.Body>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>* Create assignment *</h1>
          </Modal.Title>
          <Form>
            <Form.Group>
              <Form.Control
                className="ass-title"
                name="title"
                type="text"
                placeholder="Assignment Title"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="ass-text"
                name="text"
                type="text"
                placeholder="Assignment Text"
                onChange={handleChange}
              />
            </Form.Group>
            <div className="row-ass">
              <div>
                <Form.Group>
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    name="due_date"
                    className="ass-date"
                    type="date"
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div>
                <Button
                  id="ass-button"
                  onClick={() => {
                    postAssignment();
                    CourseObject.handleAssignmentClose();
                  }}
                >
                  Create Assignment
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
