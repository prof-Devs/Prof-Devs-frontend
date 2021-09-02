import React from 'react'
import Board from '../Board/Board';
import Chat from '../chat/Chat';
import { MdAssignment } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import './CoursePage.css'

function CoursePage() {
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
                            <button title="Create new assignment"><MdAssignment size="50" /></button>
                            <button title="Create new quiz"><IoIosCreate size="50" /></button>
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

                        <button type="button" id='buttonCss'>Go to Whiteboard!</button>
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
