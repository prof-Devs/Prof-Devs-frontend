import React, { useState, useContext,useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

import "./creating.css";

const host = "https://profdev-academy.herokuapp.com";



export default function Course() {
  const [firstTeacherName, setfirstTeacherName] = useState('')
  const [lastTeacherName, setlastTeacherName] = useState('')

  const [showForm, setShowForm] = useState(false);
  const authContext = useContext(AuthContext);
  let token = authContext.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    courseDescreption: "",
    courseStudents: [],
    courseTeacher: "",
  });



useEffect(() => {


  let pageUser = authContext.allUser.filter((item, idx) => {
    return item.email === authContext.user.user.email;
  });

  setfirstTeacherName(pageUser[0].firstName)
  setlastTeacherName(pageUser[0].lastName);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  //fnctions
  function handleShow() {
    setShowForm(true);
  }

  function handleClose() {
    setShowForm(false);
  }

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setCourseInfo({
      ...courseInfo,
      [name]: value,
    });
  }

  function handleChangeStudentNames(e) {
    let value = e.target.value;
    let name = e.target.name;

    let names = value.split(",");// dina@,ibrahim,asdkas   [dina@,ibrahim,sdkasl;]
    setCourseInfo({
      ...courseInfo,
      [name]: names,
    });
  }

  async function createCourseHandler(e) {
    e.preventDefault();
    try {
      let obj = {
        courseName: courseInfo.courseName,
        courseDisc: courseInfo.courseDescreption,
        courseStudents: courseInfo.courseStudents,
        courseTeacher: authContext.user.user.email,
        firstTeacherName:firstTeacherName,
        lastTeacherName:lastTeacherName
      };
      await axios.post(`${host}/course`, obj,config);
    } catch (error) {
    }
    handleClose();
  }


  return (
    <>
      <div className="ass-container">
        <h1>اللي بدك اياه</h1>
        <Button variant="primary" onClick={handleShow}>
          Create New Course
        </Button>
        <Modal show={showForm} onHide={handleClose} animation={false}>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  className="ass-title"
                  type="text"
                  placeholder="Course Name"
                  name="courseName"
                 
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className="ass-text"
                  type="text"
                  placeholder="Course Descreption"
                  name="courseDescreption"
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <Form.Group>
                <Form.Control
                  className="ass-title"
                  type="text"
                  placeholder="Course Teacher"
                  name="courseTeacher"
                  value={authContext.user.user.email}
                  disabled={true}
                  onChange={handleChange}
                />
              </Form.Group> */}
              <Form.Group>
              <Form.Control
                className="ass-title"
                type="text"
                placeholder="tFirstName"
                name="firstTeacherName"
                value={firstTeacherName}
                disabled={true}
                onChange={handleChange}
              />
              
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="ass-title"
                type="text"
                placeholder="tLastName"
                name="lastTeacherName"
                value={lastTeacherName}
                disabled={true}
                onChange={handleChange}
              />
              
            </Form.Group>
              <Form.Group>
                <Form.Control
                  className="ass-text"
                  type="text"
                  placeholder="studentEmail-1, studentEmail-1,...,"
                  name="courseStudents"
                  onChange={handleChangeStudentNames}
                />
              </Form.Group>

              <div>
                <Button className="c-button" onClick={createCourseHandler}>
                  Create Course
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
