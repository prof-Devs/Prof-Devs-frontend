import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
// import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Card, Button } from "react-bootstrap";

import "./quiz.css";

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhd2FuQHRlc3QuY29tIiwiaWF0IjoxNjMxMDQyMjg1fQ.EtJ_w_r3IPWhJULTYr4L-x-A9mAD5-gx6X0N3wJQ6JM';

function Quiz() {
  const AuthObject = useContext(AuthContext);
  const host = "https://profdev-academy.herokuapp.com";
  let { quizId } = useParams();
  // console.log(quizId);
  const [quizObject, setQuizObject] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [counter, setCounter] = useState();
  const [showQuiz, setShowQuiz] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (AuthObject.token?.length > 0) {
      (async () => {
        const token = AuthObject.token;
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        console.log(AuthObject);

        try {
          const data = await axios.get(
            `${host}/quiz/student/${quizId}`,
            config
          );
          console.log(data.data, "get data");

          setQuizObject(data.data);
          setCounter(data.data.timer * 1000);
          setTitle(data.data.title);
          await setQuestions(data.data.questions);
          setShowQuiz(true);
        } catch (error) {
          console.log(error.message);
        }
      
        
      //  
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AuthObject]);
  
  useEffect(() => {
     timeCount();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter]);
    const timeCount =()=>{
      const timer =
      counter > 0 && 
      setInterval(
        () => {setCounter (counter - 1) ;
        if (counter <=0){
          clearInterval(timer);
        
            setCurrentQuestionIndex(questions.length);
            setShowQuiz(false);
          
        }
      },
        10000
      );
    return () => clearInterval(timer);
    }
    
    const handleNext=() =>{
      let incrementCurrentQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(incrementCurrentQuestionIndex) ;
    }
    
    const onChangeOption=(value)=> {
      let answer= [...answers];
      answer[currentQuestionIndex] = value;
      
      setAnswers(answer);
    };
    
    
    const editQuiz=async () =>{
      const token = AuthObject.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const obj = {
        solution:answers
      };
      let test = await axios.put(`${host}/quiz/student/${quizId}`, obj, config);
      console.log("the final data", test.data);
    }
    
    console.log('hi',questions);
  if (!questions.length) {
      
    return (
      <div>
        <h3>Loading questions...</h3>
      </div>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    editQuiz();
    return (
      <div className="quiz_container">
        <h3>End of the Quiz!</h3>
      </div>
    );
  }
  return (
    <>
    {showQuiz&& 
  
     
     <div className="quiz_container">
       <h1>{title}</h1>
       <div class="quiz_header">
         <h3>Question {currentQuestionIndex + 1}</h3>
         <p>
           ({currentQuestionIndex + 1} Of {questions.length})
         </p>
       </div>
       <div className="countDown">CountDown : {counter} seconds</div>
       <hr />
       <span>
         <BsSearch color="#1a9274" size="20"></BsSearch>.
       </span>
        <h4>{questions[currentQuestionIndex].question}</h4> 
       {questions[currentQuestionIndex].options.map((item) => {
         return (
           <>
             <label>
               <input
                 type="radio"
                 checked={answers[currentQuestionIndex] === item}
                 value={item}
                 onChange={(evt) => onChangeOption(evt.target.value)}
               />
               {item}
             </label>
             <hr />
           </>
         );
       })} 
       <div class="quiz_data"></div>

       <div class="quiz_footer">
         <button className= "quiz_next" onClick={() => handleNext()}>Next</button>
       </div>
     </div>
    }
   </>
  );
}


export default Quiz;
