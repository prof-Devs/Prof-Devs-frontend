import React, { useState } from 'react'
export const CourseContextProv = React.createContext();


function CourseContext(props) {

    const [showWhiteBoard, setShowWhiteBoard] = useState(false);
    const [showAssignment, setShowAssignment] = useState(false)
    const [showQuiz, setShowQuiz] = useState(false)
    const [showForm, setShowForm] = useState(false);
    const [showAssignmentForm, setshowAssignmentForm] = useState(false);

    const [courseDataById, setCourseDataById] = useState([])
    
    function handleShow() {
        setShowForm(true);
    }

    function handleClose() {
        setShowForm(false);
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
        console.log(e.target, 'llll');
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
            courseDataById, setCourseDataById
        }}>{props.children}</CourseContextProv.Provider>
    )
}

export default CourseContext
