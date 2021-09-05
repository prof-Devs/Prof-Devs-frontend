import React, { useContext, useEffect, useState } from 'react'
import AssignmentModal from '../creating/Assignment';
import QuizModal from '../creating/Quiz';
import SeeAssignment from '../droplist/Assignments';
import SeeQuiz from '../droplist/Quizes';
import SeeMarks from '../droplist/Marks';
import Chat from '../chat/Chat';
import { MdAssignment } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import { Redirect } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import './CoursePage.css'
import { CourseContextProv } from '../../context/CourseContext';
import { useParams, useHistory } from 'react-router-dom';
import Board from '../Board/Board';

function CoursePage(props) {
const [courseData, setCourseData] = useState({})

const AuthObject = useContext(AuthContext);
console.log(AuthObject.user,'hiiiiiiiiiii');

function get() {
    
}


    let { courseId } = useParams();

    console.log('aaaaaaaaaaaaaaaaaaaa', courseId);

    const CourseObject = useContext(CourseContextProv);


    // popup

    const [dropList, setdropList] = useState('');

    function handleChange(e) {
        setdropList((e.target.value));

        CourseObject.setshowTableDropAss(true);
        CourseObject.setshowTableDropMarks(true);
    };

    // ....................................................................



    const history = useHistory();
    let boardHandleClick;
    // let assignmentHandleClick;
    // let quizHandleClick;

    // // if (courseId) {
    boardHandleClick = () => history.push(`/board/${courseId}`);
    // assignmentHandleClick = () => history.push(`/assignment/${courseId}`);
    // quizHandleClick = () => history.push(`/quiz/${courseId}`);
    // // }

    // function showHandler() {
    //     CourseObject.setShowWhiteBoard(true);
    //     CourseObject.setShowAssignment(true);
    //     CourseObject.setShowQuiz(true);
    // }

    // useEffect(() => {
    //     showHandler();

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])



    // if (!props.logged) {
    //     return <Redirect to="/" />
    // }

    return (

        <div id="CourseContainer">
            <div id="leftSection">
                <div id="mainCourse">

                    <div id="titlewrapper">
                        <h1 id="h1Styling">Course name</h1>
                        <h5 id="pStyling">Course description</h5>
                    </div>

                    <div id="leftRight">

                        <div id="buttonsStyle">
                            <button title="Create new assignment"><MdAssignment size="40" onClick={CourseObject.handleAssignmentShow} /></button>
                            <AssignmentModal />
                            <button title="Create new quiz"><IoIosCreate size="40" onClick={CourseObject.handleShow} /></button>
                            <QuizModal />
                        </div>

                        {/* <Board /> */}
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
                        <button type="button" onClick={boardHandleClick} id='buttonCss' >Go to Whiteboard!</button>
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
