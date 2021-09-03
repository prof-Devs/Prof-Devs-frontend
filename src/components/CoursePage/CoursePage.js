import React, { useContext, useEffect } from 'react'
import Chat from '../chat/Chat';
import { MdAssignment } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import './CoursePage.css'
import { CourseContextProv } from '../../context/CourseContext';
import { useParams, useHistory } from 'react-router-dom';

//<button onclick="location.href='page'">

function CoursePage() {
    let { courseId } = useParams();

    console.log('aaaaaaaaaaaaaaaaaaaa', courseId);

    const CourseObject= useContext(CourseContextProv);

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
                            <button title="Create new assignment"><MdAssignment size="50" onClick={assignmentHandleClick}/></button>
                            <button title="Create new quiz"><IoIosCreate size="50" onClick={quizHandleClick} /></button>
                        </div>

                        <div id="dropList">
                            <label id="lableStyle">Choose action:</label>
                            <select name="action" id="action">
                                <option value="Assignment">See Assignments</option>
                                <option value="Quizes">See Quizes</option>
                                <option value="Marks">Students Marks</option>
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

        </div>

    )
}

export default CoursePage
