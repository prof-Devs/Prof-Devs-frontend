import React, { useState } from 'react'
export const CourseContextProv = React.createContext();


function CourseContext(props) {

    const [showWhiteBoard, setShowWhiteBoard] = useState(false);
    const [showAssignment, setShowAssignment] = useState(false)
    const [showQuiz, setShowQuiz] = useState(false)

    function whiteBoardHandler() {
        setShowWhiteBoard(true);
    }

    function assignmentHandler() {
        setShowAssignment(true);
    }
    function quizHandler() {
        setShowQuiz(true);
    }

    return (
        <CourseContextProv.Provider value={{ whiteBoardHandler, showWhiteBoard,setShowWhiteBoard, assignmentHandler, showAssignment,setShowAssignment, quizHandler, showQuiz ,setShowQuiz}}>{props.children}</CourseContextProv.Provider>
    )
}

export default CourseContext
