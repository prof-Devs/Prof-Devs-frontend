import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CourseContextProv } from "../../context/CourseContext";
import { AuthContext } from "../../context/authContext";
import { DropContext } from "../../context/dropListContext";
import { useParams } from "react-router-dom";

import axios from "axios";

import "./creating.css";

export default function Quiz() {
  let { courseId } = useParams();
  const CourseObject = useContext(CourseContextProv);
  const listContext = useContext(DropContext);

  const host = "https://profdev-academy.herokuapp.com";

  const authContext = useContext(AuthContext);
  let questionsArray = [];
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
    if (CourseObject.questions?.length === 0) {

      // questionsArray.push({
      //   question: quizInfo.question,
      //   options: [
      //     quizInfo.option1,
      //     quizInfo.option2,
      //     quizInfo.option3,
      //     quizInfo.option4,
      //   ],
      //   correct_answer: quizInfo.correct_answer,
      // });

      CourseObject.setQuestions(
        [{
          question: quizInfo.question,
          options: [
            quizInfo.option1,
            quizInfo.option2,
            quizInfo.option3,
            quizInfo.option4,
          ],
          correct_answer: quizInfo.correct_answer,
        }],
      );
    } else {
      CourseObject.setQuestions([
        ...CourseObject.questions,

        {
          question: quizInfo.question,
          options: [
            quizInfo.option1,
            quizInfo.option2,
            quizInfo.option3,
            quizInfo.option4,
          ],
          correct_answer: quizInfo.correct_answer,
        }
      ]);
    }
    console.log("questions!!!!!", CourseObject.questions);

    // setQuizInfo({ ...quizInfo });
    console.log("questions afteeeer!!!!!", quizInfo);

    // setStaticValues({
    //   ...staticValues,
    //   question: "",
    //   correct_answer: "",
    //   option1: "",
    //   option2: "",
    //   option3: "",
    //   option4: "",
    // });
    CourseObject.setQuestCount(CourseObject.questCount + 1);
    e.target.reset();
  }

  async function postQuiz(e) {
    e.preventDefault();
    if (CourseObject.questCount === 0) return;
    const obj = {
      questions: CourseObject.questions,
      timer: staticValues.timer,
      title: staticValues.title,
      courseId: courseId
    };
    console.log(obj, "no content");
    await axios.post(`${host}/quiz`, obj, config);

    const dataGet = await axios.get(
      `${host}/course/teacher/${courseId}`,
      config
    );

    listContext.setAllCoursequiz(dataGet.data.quizes);
    CourseObject.setQuestions([])
    CourseObject.handleClose();
  }

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
            <Form.Text className="counter">
              {" "}
              You Added ({CourseObject.questCount}) Questions
            </Form.Text>

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
          </Form>
          <Form onSubmit={postQuiz} className="ass-container">
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
                <Button id="ass-button" type="submit">
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
