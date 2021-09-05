import React from "react";
import { BsSearch } from "react-icons/bs";
import { Redirect } from "react-router-dom";

import "./quiz.css";
function Quiz(props) {
  if (props.logged) {

    console.log("inside iffffffffff", props.logged);
    return (
      <div className="quiz_container">
        <div class="quiz_header">
          <h1>MCQ Quiz</h1>
          <p>(2 of 5)</p>
        </div>
        <hr />
        <div class="quiz_data">
          <span>
            <BsSearch color="#1a9274" size="20"></BsSearch>.
          </span>
          <span id="question">
            {" "}
            Which of the following country has largest population ?
          </span>
          <ol>
            <li tabIndex="4">Jordan</li>
            <li tabIndex="4">India</li>
            <li tabIndex="4">China</li>
            <li tabIndex="4">Russia</li>
          </ol>
        </div>
        <hr />
        <div class="quiz_footer">
          <button class="quiz_previous">&lt; previous </button>
          <button class="quiz_next">Next &gt; </button>
        </div>
      </div>
    );
  }
  console.log("inside elseeeeeeeeeeeee", props.logged);
  
  return <Redirect to="/" />;
}

export default Quiz;
