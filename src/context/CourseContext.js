import React, { useState } from 'react'
export const CourseContextProv = React.createContext();


function CourseContext(props) {

    const [showWhiteBoard, setShowWhiteBoard] = useState(false);
    const [showAssignment, setShowAssignment] = useState(false)
    const [showQuiz, setShowQuiz] = useState(false)
    const [showForm, setShowForm] = useState(false);
    const [showAssignmentForm, setshowAssignmentForm] = useState(false);
    const [questCount, setQuestCount] = useState(0)
    const [courseDataById, setCourseDataById] = useState({})
    const [firstTeacherName, setfirstTeacherName] = useState('')
    const [lastTeacherName, setlastTeacherName] = useState('')
    const [userCourses, setUserCourses] = useState([]);
    const [questions, setQuestions] = useState([]);

    function handleShow() {
        setShowForm(true);
    }

    function handleClose() {
        setShowForm(false);
        setQuestCount(0)
    }

    function handleAssignmentShow() {
        setshowAssignmentForm(true);
    }

    function handleAssignmentClose() {
        setshowAssignmentForm(false);
    }


    function whiteBoardHandler() {
        setShowWhiteBoard(true);
    }

    function assignmentHandler() {
        setShowAssignment(true);
    }
    function quizHandler() {
        setShowQuiz(true);
    }

    // ----------------------//

    const [showTableDropAss, setshowTableDropAss] = useState(false);
    const [showFormDropAss, setshowFormDropAss] = useState(false);


    function handleShowDropAss() {
        setshowTableDropAss(true);
    }

    function handleCloseDropAss() {
        setshowTableDropAss(false);
    }

    function handleFormDropAss(e) {
        setshowTableDropAss(false);
        setshowFormDropAss(true);
    }

    function handleClose1DropAss() {
        setshowFormDropAss(false);
        setshowTableDropAss(true);

    }
    // ----------------------//
    const [showTableDropMarks, setshowTableDropMarks] = useState(false);

    return (
        <CourseContextProv.Provider value={{
            whiteBoardHandler, showWhiteBoard, setShowWhiteBoard, assignmentHandler, showAssignment, setShowAssignment, quizHandler, showQuiz, setShowQuiz, setShowForm, handleShow, handleClose, showForm, handleAssignmentClose, handleAssignmentShow, showAssignmentForm, setshowAssignmentForm, showTableDropAss, handleCloseDropAss, handleFormDropAss, handleClose1DropAss, showFormDropAss, handleShowDropAss, setshowTableDropAss, setshowTableDropMarks, showTableDropMarks,
            courseDataById, setCourseDataById, questCount, setQuestCount,firstTeacherName, setfirstTeacherName,lastTeacherName, setlastTeacherName,
            userCourses, setUserCourses,questions, setQuestions
        }}>{props.children}</CourseContextProv.Provider>
    )
}

export default CourseContext
