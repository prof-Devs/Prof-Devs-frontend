import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "./authContext";
import { CourseContextProv } from './CourseContext';
import { useParams } from 'react-router-dom';



export const DropContext = React.createContext();
const host = "https://profdev-academy.herokuapp.com";

function DropListContext(props) {

    let { courseId } = useParams();

    const authContext = useContext(AuthContext);
    const CourseObject = useContext(CourseContextProv);

    const [allAssignments, setAllAssignments] = useState([]);
    const [courseInfo, setCourseInfo] = useState([])
    const [assignmentNeeded, setAssignmentNeeded] = useState([])
    const [allCourseAssignment, setAllCourseAssignment] = useState([])
    const [allCoursequiz, setAllCoursequiz] = useState([])
    const [filteredAss, setFilteredAss] = useState([]);
    let token = authContext.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    async function getAssignmentsHandler() {

        try {
            const data = await axios.get(`${host}/assignment/teacher`, config);
            console.log(data.data, "inside getAssignment");
            setAllAssignments(data.data)
        } catch (error) {
            console.log(error.message);
        }
    }


    async function getAssignmentsHandlerForStudent() {

        try {
            const data = await axios.get(`${host}/assignment/student`, config);
            console.log(data.data, "inside getAssignment");
            setAllAssignments(data.data)
        } catch (error) {
            console.log(error.message);
        }
    }


    async function getCourseInfoForTeacher() {

        try {
            const data = await axios.get(`${host}/course/teacher/${courseId}`, config);
            console.log(data.data, "inside getCourseInfo");
            setCourseInfo(data.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    async function getCourseInfoForStudent() {

        try {
            const data = await axios.get(`${host}/course/student/${courseId}`, config);
            console.log(data.data, "inside getCourseInfo");
            setCourseInfo(data.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    // listContext?.allCourseAssignment

//     async function deleteAssignment(id) {
//         console.log('before', allCourseAssignment);
//         allCourseAssignment?.map(async element => {
//             if (element._id === id) {
//                 console.log('id', id);
//                 await axios.delete(`${host}/assignment/${id}`, config);
// console.log('courseId first',courseId);
//                 if (courseId) {
//                     console.log(courseId,'courseId second');
//                     const dataGet = await axios.get(`${host}/course/teacher/${courseId}`, config);
//                     setAllCourseAssignment(dataGet.data.assignments);              
//                 };
//                 //    let updating = await axios.get(`${host}/course/teacher/${courseId}`, config);
//                 //    setAllCourseAssignment(updating.data.courseAssignments)
//             }
//         })
//     }

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

    // async function updateAssignmentHandler(id, e) {
    //     e.preventDefault();
    //     console.log('before');
    //     let obj = {
    //         title: assignmentInfo.title,
    //         text: assignmentInfo.text,
    //         due_date: assignmentInfo.due_date,
    //     };
    //     allAssignments.map(async element => {
    //         if (element._id === id) {
    //             console.log('id', id);
    //             await axios.put(`${host}/assignment/${id}`, obj, config);
    //             const data = await axios.get(`${host}/assignment/teacher`, config);
    //             setAllAssignments(data.data);
    //         }
    //     })
    // }


    const state = {
        allAssignments,
        getAssignmentsHandler,
        // deleteAssignment,
        handleChangeAssignment,
        // updateAssignmentHandler,
        assignmentInfo,
        courseInfo,
        setCourseInfo,
        getCourseInfoForTeacher,
        getCourseInfoForStudent,
        assignmentNeeded,
        setAssignmentNeeded,
        setAllCourseAssignment,
        allCourseAssignment,
        setAllCoursequiz,
        allCoursequiz,
        filteredAss, setFilteredAss
    }


    return (
        <DropContext.Provider value={state}>
            {props.children}
        </DropContext.Provider>
    )
}

export default DropListContext
