import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
// import { Redirect } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
// import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
// import { Card, Button } from "react-bootstrap";

import "./quiz.css";
// const AuthObject = useContext(AuthContext);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1a2luYV84OUB5YWhvby5jb20iLCJpYXQiOjE2MzA5NTc0NTJ9.pYEv5RrGi6i6NU3vSjQ1FgF7aD8U9LYn99YWrfqeENA';
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
const host = "https://profdev-academy.herokuapp.com";
class  Quiz extends Component{
  constructor (props){
    super(props)
    this.state ={
      quizObject:[],
      currentQuestionIndex: 0,
      questions: [],
      answers: [],
      counter:60,
      showQuiz: false,
      title:''

    }
  }
 


  async componentDidMount() {
    
      try {
        let data = await axios.get(
          `${host}/quiz/student/6135346c26dfc3001693141f`,
          config
        );
        console.log('get daata',data);
       this.setState({
         quizObject:data.data,
        //  counter:data.data.timer*1000,
         title:data.data.title,
       })
       console.log(this.state.quizObject);
      } catch {
        console.error();
      }

      this.setState({ questions: this.state.quizObject.questions, showQuiz: true });
      console.log(this.state.questions.questions);
      const timer =
        this.state.counter > 0 && 
        setInterval(
          () => {this.setState({ counter: this.state.counter - 1 });
          if (this.state.counter <=0){
            clearInterval(timer);
            this.setState({
              currentQuestionIndex:this.state.questions.length,
              showQuiz:false,
            })
          }
        },
          1000
        );
      return () => clearInterval(timer);
      
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  handleNext() {
    let incrementCurrentQuestionIndex = this.state.currentQuestionIndex + 1;
    this.setState({ currentQuestionIndex: incrementCurrentQuestionIndex });
  }

  onChangeOption(value) {
    const { currentQuestionIndex } = this.state;
    let answers = [...this.state.answers];
    answers[currentQuestionIndex] = value;

    this.setState({ answers });
  };
  async editQuiz() {
    const obj = {
      solution:this.state.answers
    };
    let test = await axios.put(`${host}/quiz/student/6135346c26dfc3001693141f`, obj, config);
    console.log("the final data", test.data);
  }

 render (){
  const { questions, currentQuestionIndex, answers } = this.state;
     
    if (!questions.length) {
      
      return (
        <div>
          <h3>Loading questions...</h3>
        </div>
      );
    }

    if (currentQuestionIndex >= questions.length) {
      this.editQuiz();
      return (
        <div className="quiz_container">
          <h3>End of the Quiz!</h3>
        </div>
      );
    }
    

    const { question, options } = questions[currentQuestionIndex];
    

    // console.log(answers);
    // eslint-disable-next-line no-lone-blocks
    return (
      <>
           {this.state.showQuiz&& 
         
            
            <div className="quiz_container">
              <h1>{this.state.title}</h1>
              <div class="quiz_header">
                <h3>Question {currentQuestionIndex + 1}</h3>
                <p>
                  ({currentQuestionIndex + 1} Of {questions.length})
                </p>
              </div>
              <div className="countDown">CountDown : {this.state.counter} seconds</div>
              <hr />
              <span>
                <BsSearch color="#1a9274" size="20"></BsSearch>.
              </span>
              <h4>{question}</h4>
              {options.map((item) => {
                return (
                  <>
                    <label>
                      <input
                        type="radio"
                        checked={answers[currentQuestionIndex] === item}
                        value={item}
                        onChange={(evt) => this.onChangeOption(evt.target.value)}
                      />
                      {item}
                    </label>
                    <hr />
                  </>
                );
              })}
              <div class="quiz_data"></div>
  
              <div class="quiz_footer">
                <button className= "quiz_next" onClick={() => this.handleNext()}>Next</button>
              </div>
            </div>
           }
          </>
        
      
      
    )
 }
}

// return <Redirect to="/" />;

export default Quiz;
