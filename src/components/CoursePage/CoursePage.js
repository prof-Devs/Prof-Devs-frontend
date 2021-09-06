import React, { useContext, useState, useEffect } from 'react'
import AssignmentModal from '../creating/Assignment';
import QuizModal from '../creating/Quiz';
import SeeAssignment from '../droplist/Assignments';
import SeeQuiz from '../droplist/Quizes';
import SeeMarks from '../droplist/Marks';
import Chat from '../chat/Chat';
import { MdAssignment } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import { AuthContext } from '../../context/authContext';
import { DropContext } from "../../context/dropListContext";
import axios from 'axios';
import './CoursePage.css'
import { CourseContextProv } from '../../context/CourseContext';
import { useParams, useHistory } from 'react-router-dom';



function CoursePage(props) {
    const listContext = useContext(DropContext);





    const AuthObject = useContext(AuthContext);


    const token = AuthObject.token;

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const host = "https://profdev-academy.herokuapp.com";

    let { courseId } = useParams();


    const CourseObject = useContext(CourseContextProv);


    // popup

    const [dropList, setdropList] = useState('');

    function handleChange(e) {
        setdropList((e.target.value));
        CourseObject.setshowTableDropAss(true);
        CourseObject.setshowTableDropMarks(true);
    };

    // ....................................................................

    useEffect(() => {
        (async () => {


            if (AuthObject.role === 'user') {

                try {
                    const data = await axios.get(`${host}/course/student/${courseId}`, config);
                    console.log(data.data, "inside getCourseInfo");

                    CourseObject.setCourseDataById([data.data]);
                    listContext.setCourseInfo(data.data)
                    listContext.setAllCourseAssignment(data.data.courseAssignments)

                } catch (error) {
                    console.log(error.message);
                }
            }
            else {
                try {
                    const data = await axios.get(`${host}/course/teacher/${courseId}`, config);
                    console.log(data.data, "inside getCourseInfo");

                    CourseObject.setCourseDataById([data.data]);
                    listContext.setCourseInfo(data.data)
                    listContext.setAllCourseAssignment(data.data.courseAssignments)
                } catch (error) {
                    console.log(error.message);
                }

            }
        }
        )()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseObject.courseDataById])





    const history = useHistory();
    let boardHandleClick;

    boardHandleClick = () => history.push(`/board/${courseId}`);


    // useEffect(() => {

    //     (async () => {
    //         try {


    //             if (AuthObject.role === 'user') {

    //                 let data = await axios.get(`${host}/course/student/${courseId}`, config)
    //             }
    //             else {
    //                 let data = await axios.get(`${host}/course/teacher/${courseId}`, config)
    //             }
    //         }
    //         catch {
    //             console.error();
    //         }
    //     }
    //     )()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [courseId])




    return (
        <>
            {CourseObject.courseDataById.map(item => {
                return (

                    <div id="CourseContainer">
                        <div id="leftSection">
                            <div id="mainCourse">

                                <div id="titlewrapper">
                                    <h1 id="h1Styling">{item.courseName}</h1>
                                    <h5 id="pStyling">{item.courseDisc}</h5>
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
            })
            }
        </>
    )
}

export default CoursePage
