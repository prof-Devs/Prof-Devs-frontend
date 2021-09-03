import React, { useContext, useEffect, useState } from 'react'
import AssignmentModal from '../creating/Assignment';
import QuizModal from '../creating/Quiz';
import SeeAssignment from '../droplist/Assignments';
import SeeQuiz from '../droplist/Quizes';
import SeeMarks from '../droplist/Marks';
import Chat from '../chat/Chat';
import { MdAssignment } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import Header from '../Header/Header'
import './CoursePage.css'
import { CourseContextProv } from '../../context/CourseContext';
import { useParams, useHistory } from 'react-router-dom';
//<button onclick="location.href='page'">
import { Link } from "react-router-dom";

function CoursePage() {
    let { courseId } = useParams();

    console.log('aaaaaaaaaaaaaaaaaaaa', courseId);

    const CourseObject = useContext(CourseContextProv);

    const history = useHistory();
    let boardHandleClick;
    let assignmentHandleClick;
    let quizHandleClick;

    // if (courseId) {
    boardHandleClick = () => history.push(`/board/${courseId}`);
    assignmentHandleClick = () => history.push(`/assignment/${courseId}`);
    quizHandleClick = () => history.push(`/quiz/${courseId}`);
    // }

    function showHandler() {
        CourseObject.setShowWhiteBoard(true);
        CourseObject.setShowAssignment(true);
        CourseObject.setShowQuiz(true);
    }

    useEffect(() => {
        showHandler();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const [dropList, setdropList] = useState('');

    function handleChange(e) {
        setdropList((e.target.value));

        CourseObject.setshowTableDropAss(true);
        CourseObject.setshowTableDropMarks(true);
    };

    return (

        <div id="CourseContainer">
            <div id="leftSection">
                <div id="mainCourse">

                    <div id="titlewrapper">
                        <h1 id="h1Styling">Course name</h1>
                        <h4 id="pStyling">Course description</h4>
                    </div>

                    <div id="leftRight">

                        <div id="buttonsStyle">
                            <button title="Create new assignment"><MdAssignment size="50" onClick={CourseObject.handleAssignmentShow} /></button>
                            <AssignmentModal />
                            <button title="Create new quiz"><IoIosCreate size="50" onClick={CourseObject.handleShow} /></button>
                            <QuizModal />
                        </div>

                        <div id="dropList">
                            <label id="lableStyle" >Choose action:</label>
                            <select name="action" id="action" onChange={handleChange} value={dropList}>
                                <option >select operation..</option>
                                <option value="See Assignments">See Assignments</option>
                                <option value="See Quizes">See Quizes</option>
                                <option value="Students Marks">Students Marks</option>
                            </select>
                        </div>

                    </div>
                    <div id='buttonCsswrapper'>

                        <button type="button" id='buttonCss' onClick={boardHandleClick} >Go to Whiteboard!</button>
                    </div>
                </div>

            </div>

            <div id="chatWrapper">
                <Chat />
            </div>

            {dropList === 'See Assignments' &&
                <SeeAssignment />
            }

            {dropList === 'See Quizes' &&
                <SeeQuiz />
            }
            
            {dropList === 'Students Marks' &&
                <SeeMarks />
            }

        </div>


    )
}

export default CoursePage
