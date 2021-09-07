import React, { useState } from "react";
import "./assignment.css";


function Assignment(props) {
  const [show, setShow] = useState(false);
  


  return (
    <>
      <div class="courses-container_Assignment">
        <div class="course_Assignment">
          <div class="course-preview_Assignment">
            <h6>Course</h6>
            <h2>Music And Art</h2>
            <button onClick={()=>setShow(!show)} id="view_student_solution">
              View students solution <i class=" fas fa-chevron-right"></i>
            </button>
          </div>
          <div class="course-info_Assignment">
            <div class="progress-container_Assignment">
              <div class="progress_Assignment"></div>
              <span class="progress-text_Assignment">6/9 Challenges</span>
            </div>
            <h6>Assignment</h6>
            <h2>Title of Assignment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sint
              fugit reiciendis delectus eum recusandae quisquam harum ex facere
              necessitatibus aspernatur possimus dolores nesciunt qui, dolore
              natus. Quam dolores maiores eaque saepe sequi, cupiditate repellat
              dolorem debitis maxime ea ex neque, quisquam cumque minus fugiat
              commodi, fugit suscipit harum culpa ut rem sint recusandae!
              Quaerat aperiam explicabo saepe autem sunt ipsa maiores esse? Eum
              at officiis optio culpa nemo asperiores quod esse rem consequatur
              omnis provident eos non est, rerum corporis voluptatum aperiam?
              Animi labore iure porro exercitationem. Ex maiores facere eaque,
              saepe dicta voluptate neque commodi mollitia tempore minima!
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
