import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AuthContext } from "../../context/authContext";
import { CourseContextProv } from "../../context/CourseContext";
import { VscNewFolder } from 'react-icons/vsc';
import axios from "axios";

import "./creating.css";

const host = "https://profdev-academy.herokuapp.com";



export default function Course() {


  const [showForm, setShowForm] = useState(false);
  const authContext = useContext(AuthContext);
  const courseContext = useContext(CourseContextProv);

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
        firstTeacherName:courseContext.firstTeacherName,
        lastTeacherName:courseContext.lastTeacherName
      };
      await axios.post(`${host}/course`, obj,config);

      if (authContext.role === "user") {
        
        let result = await axios.get(`${host}/course/student`, config);
        
        let newData = []
        result.forEach((e) => {
          e.courseStudents.forEach((e2) => {
            if(e2===authContext.user.user.email) newData.push(e)
          });
        });
        console.log(newData,'iam here user');
        
          courseContext.setUserCourses(newData);
  

        } else {
          let result = await axios.get(`${host}/course/teacher`, config);

        let newData = result.data.filter((e) => {
          return `${e.courseTeacher}` === authContext.user.user.email;
        });
        console.log(newData,'iam here');

        courseContext.setUserCourses(newData);
      }


    } catch (error) {
    }
    handleClose();
  }


  return (
    <>
      <div className="ass-container">
        <h1>اللي بدك اياه</h1>
        <div class='createWrapper'>
        <Button id="create-course" onClick={handleShow}>
          <VscNewFolder style ={{fontSize:"20px"}}/> New Course
        </Button>
        </div>
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
         
              <Form.Group>
              <Form.Control
                className="ass-title"
                type="text"
                placeholder="tFirstName"
                name="firstTeacherName"
                value={courseContext.firstTeacherName}
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
                value={courseContext.lastTeacherName}
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
