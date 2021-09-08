import React, { useState, useEffect, useContext } from "react";
import "./assignment.css";
import { DropContext } from "../../context/dropListContext";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../../context/authContext";

function Assignment(props) {

  const [show, setShow] = useState(false);
  const listContext = useContext(DropContext);
  let { assignmentId } = useParams();
  const AuthObject = useContext(AuthContext);

  useEffect(() => {
    // (async ()=>{
     let thing = listContext.allCourseAssignment.filter(ele => ele._id === assignmentId);

    listContext.setFilteredAss(thing[0]);


    // filteredAss, setFilteredAss
    // })()
  }, [AuthObject]);
  console.log('jjjjjj', listContext.filteredAss);
  return (
    <>
      <div class="courses-container_Assignment">
        <div class="course_Assignment">
          <div class="course-preview_Assignment">
            <h6>Course</h6>
            <h2>{listContext?.courseInfo?.course?.courseName || 'Mathmatic'}</h2>
            <button onClick={() => setShow(!show)} id="view_student_solution">
              View students solution <i class=" fas fa-chevron-right"></i>
            </button>
          </div>
          <div class="course-info_Assignment">
            <div class="progress-container_Assignment">
              <div class="progress_Assignment"></div>
              <span class="progress-text_Assignment">6/9 Challenges</span>
            </div>
            <h6>Assignment</h6>
            <h2>{listContext?.filteredAss?.title}</h2>
            <p>
              {listContext?.filteredAss?.text}
            </p>
            <button class="btn_Assignment">Read More ...</button>
          </div>
        </div>
      </div>

      {show && (
        <>
          <div class="table-container">
            <div class="table-1">
              <table class='AssignmentTable'>
                <tbody>
                  <tr>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Solutions</th>
                    <th>Marks</th>
                  </tr>
                  <tr>
                    <td data-th="email">ibrahimabuawadwork@gmail.com</td>
                    <td data-th="Element">IbrahimAbuawad</td>
                    <td data-th="Solutions">
                      https://www.solution.com/282gdsfg09287fjds/fake
                    </td>
                    <td data-th="marks">
                      <input
                        type="number"
                        name="marks"
                        id="marks"
                        min="1"
                        max="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td data-th="email">ibrahimabuawadwork@gmail.com</td>
                    <td data-th="Element">IbrahimAbuawad</td>
                    <td data-th="Solutions">
                      https://www.solution.com/282gdsfg09287fjds/fake
                    </td>
                    <td data-th="marks">
                      <input
                        type="number"
                        name="marks"
                        id="marks"
                        min="1"
                        max="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td data-th="email">ibrahimabuawadwork@gmail.com</td>
                    <td data-th="Element">IbrahimAbuawad</td>
                    <td data-th="Solutions">
                      https://www.solution.com/282gdsfg09287fjds/fake
                    </td>
                    <td data-th="marks">
                      <input
                        type="number"
                        name="marks"
                        id="marks"
                        min="1"
                        max="10"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="btn-assignment-container">
            <button class="marks-btn">Submit Marks</button>
          </div>
        </>
      )}
    </>
  );
}

export default Assignment;
