import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './creating.css'
import axios from 'axios';
import MyCourse from '../my_course/MyCourse';
import cookie from 'react-cookies';


const host = "https://profdev-academy.herokuapp.com"
const token = cookie.load('auth');

export default function Course() {
    const [showForm, setShowForm] = useState(false);
    const [courseInfo, setCourseInfo] = useState({
        courseName: '',
        courseDescreption: '',
        courseStudents: [],
        courseTeacher: '',
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
            [name]: value
        });
    };

    function handleChangeStudentNames(e) {
        let value = e.target.value;
        let name = e.target.name;

        let names = value.split(',');
        setCourseInfo({
            ...courseInfo,
            [name]: names
        });


    }

    async function createCourseHandler(e) {
        e.preventDefault();
        try {
            let obj = {
                courseName: courseInfo.courseName,
                courseDisc: courseInfo.courseDescreption,
                courseStudents: courseInfo.courseStudents,
                courseTeacher: courseInfo.courseTeacher,
            }
            const data = await axios({
                method: 'post',
                url: `/course/`,
                mode: 'cors',
                baseURL: host,
                data: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-origin": host,
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
        handleClose();
    }

    return (
        <>
            <div className="ass-container">
                <Button variant="primary" onClick={handleShow}>

                    Create New Course
                </Button>
                <Modal show={showForm} onHide={handleClose} animation={false}>
                    <Modal.Body>
                        <Form >
                            <Form.Group>
                                <Form.Control className="ass-title" type="text" placeholder="Course Name" name="courseName" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Control className="ass-text" type="text" placeholder="Course Descreption" name="courseDescreption" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className="ass-title" type="text" placeholder="Course Teacher" name="courseTeacher" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Control className="ass-text" type="text" placeholder="studentEmail-1, studentEmail-1,...," name="courseStudents" onChange={handleChangeStudentNames} />
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
            <MyCourse />
        </>
    )
}
