import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CourseContextProv } from "../../context/CourseContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

import "./creating.css";

export default function Quiz() {
  const CourseObject = useContext(CourseContextProv);

  const host = "https://profdev-academy.herokuapp.com";

  const authContext = useContext(AuthContext);

  const token = authContext.token;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [quizInfo, setQuizInfo] = useState({
    question: "",
    correct_answer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
const [questCount, setQuestCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [staticValues, setStaticValues] = useState({
    timer: 1,
    title: "",
  });

  function handleChange2(e) {
    let value = e.target.value;
    let name = e.target.name;
    setStaticValues({
      ...staticValues,
      [name]: value,
    });
  }

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setQuizInfo({
      ...quizInfo,
      [name]: value,
    });
  }

  function addQuiz(e) {
    e.preventDefault();
    if (questions.length <= 0) {
      setQuestions([
        {
          question: quizInfo.question,
          options: [quizInfo.option1, quizInfo.option2, quizInfo.option3,quizInfo.option4],
          correct_answer: quizInfo.correct_answer,
        },
      ]);
    } else {
      setQuestions([
        ...questions,

        {
          question: quizInfo.question,
          options: [quizInfo.option1, quizInfo.option2, quizInfo.option3],
          correct_answer: quizInfo.correct_answer,
        },
      ]);
    }

    setQuizInfo({ ...quizInfo });
    // setStaticValues({
    //   ...staticValues,
    //   question: "",
    //   correct_answer: "",
    //   option1: "",
    //   option2: "",
    //   option3: "",
    //   option4: "",
    // });
    setQuestCount(questCount+1)
    e.target.reset();
    console.log("questions array", questions);
  }
  console.log(
    quizInfo,
    "timer",
    staticValues.timer,
    "title",
    staticValues.title,
    "hiii quizInfo"
  );

  async function postQuiz() {
    const obj = {
      questions: questions,
      timer: staticValues.timer,
      title: staticValues.title,
    };
    console.log("inside func", token, quizInfo);
    let test = await axios.post(`${host}/quiz`, obj, config);
    console.log("the final data", test.data);
  }

  useEffect(() => {
    setQuestions([]);
  }, [CourseObject.handleClose]);

  return (
    <div className="ass-container">
      <Modal
        size="lg"
        centered="true"
        show={CourseObject.showForm}
        onHide={CourseObject.handleClose}
        animation={false}
      >
        <Modal.Body>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>* Create quiz *</h1>
          </Modal.Title>
          <Form onSubmit={addQuiz}>
            <Form.Group>
              <Form.Control
                className="ass-title"
                name="title"
                type="text"
                placeholder="Quiz Title"
                required={true}
                onChange={handleChange2}
              />
            </Form.Group>
            <Form.Text className="counter"> You Added ({questCount}) Questions</Form.Text>

            <Form.Group>
              <Form.Control
                className="q-text"
                type="text"
                name="question"
                placeholder="Question"
                required={true}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="ass-title"
                type="text"
                name="correct_answer"
                placeholder="The correct answer"
                required={true}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="options"
                name="option1"
                type="text"
                placeholder="Option-1"
                required={true}
                onChange={handleChange}
              />
              <Form.Control
                className="options"
                name="option2"
                type="text"
                placeholder="Option-2"
                required={true}
                onChange={handleChange}
              />
              <Form.Control
                className="options"
                name="option3"
                type="text"
                placeholder="Option-3"
                required={true}
                onChange={handleChange}
              />
              <Form.Control
                className="options"
                name="option4"
                type="text"
                placeholder="Option-4"
                required={true}
                onChange={handleChange}
              />
              <Button type="submit" id="add-button">
                Add Question
              </Button>
            </Form.Group>

            <div className="row-ass">
              <div>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="q-date"
                    type="number"
                    placeholder="Duration (in minutes)"
                    name="timer"
                    required={true}
                    min="1"
                    defaultValue="1"
                    onChange={handleChange2}
                  />
                </Form.Group>
              </div>
              <div>
                <Button
                  id="ass-button"
                  onClick={() => {
                    postQuiz();
                    CourseObject.handleClose();
                  }}
                >
                  Create Quiz
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
