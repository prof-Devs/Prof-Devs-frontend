import React, { useContext } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import CourseObject from "../../context/CourseContext";
import { CourseContextProv } from "../../context/CourseContext";
import { DropContext } from "../../context/dropListContext";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import "./dropList.css";
// import "../creating/creating.css";

export default function Assignments() {
  const [showTable, setShowTable] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [quizId, setQuizId] = useState(0);

  const [staticValues, setStaticValues] = useState({
    timer: 1,
    title: "",
  });

  let { courseId } = useParams();
  const host = "https://profdev-academy.herokuapp.com";

  const listContext = useContext(DropContext);
  const authContext = useContext(AuthContext);

  function handleShow() {
    setShowTable(true);
  }

  function handleClose() {
    setShowTable(false);
  }

  function handleForm(id) {
    setShowForm(true);
    setShowTable(false);
    setQuizId(id);
  }

  function handleClose1() {
    setShowForm(false);
    setShowTable(true);

    // setShowTable(false);
  }

  const token = authContext.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function deleteQuiz(id) {
    listContext.allCoursequiz?.map(async (element) => {
      if (element._id === id) {
        await axios.delete(`${host}/quiz/${id}`, config);

        if (courseId) {
          const dataGet = await axios.get(
            `${host}/course/teacher/${courseId}`,
            config
          );

          listContext.setAllCoursequiz(dataGet.data.quizes);
        }
      }
    });
  }

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setStaticValues({
      ...staticValues,
      [name]: value,
    });
  }

  async function updateQuiz(id, e) {
    e.preventDefault();

    const obj = {
      timer: staticValues.timer,
      title: staticValues.title,
    };
    console.log(obj, "no content");
    listContext.allCoursequiz?.map(async (element) => {
      if (element._id === id) {
        console.log("id", id);
        await axios.put(`${host}/quiz/${id}`, obj, config);

        if (courseId) {
          const dataGet = await axios.get(
            `${host}/course/teacher/${courseId}`,
            config
          );

          listContext.setAllCoursequiz(dataGet.data.quizes);
        }
      }
    });
    handleClose1();
  }

  return (
    <>
      <Modal
        size="lg"
        centered="true"
        show={showTable}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Body>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>* See quizes *</h1>
          </Modal.Title>

          <Table responsive>
            <thead>
              <tr>
                <th>Quiz Title</th>
                <th>timer</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            {listContext?.allCoursequiz?.map((ele) => (
              <tbody>
                <tr>
                  <td>
                    <Link to={`/quiz/${courseId}/${ele._id}`}>{ele.title}</Link>
                  </td>
                  <td>{ele.timer}</td>
                  {authContext?.role === "editor" && (
                    <>
                      <td onClick={() => handleForm(ele._id)}>
                        <FaRegEdit />
                      </td>
                      <td>
                        <RiDeleteBin6Line onClick={() => deleteQuiz(ele._id)} />
                      </td>
                    </>
                  )}
                </tr>
              </tbody>
            ))}
          </Table>
        </Modal.Body>
      </Modal>

      <Modal
        centered="true"
        show={showForm}
        onHide={handleClose1}
        animation={false}
      >
        <Form onSubmit={(e) => updateQuiz(quizId, e)} className="quiz-edit">
          <Form.Group>
            <Form.Control
              className="ass-title"
              name="title"
              type="text"
              placeholder="Quiz Title"
              required={true}
              onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            <Form.Group>
              <Button id="ass-button1" type="submit">
                Edit Quiz
              </Button>
            </Form.Group>
          </div>
        </Form>
      </Modal>
    </>
  );
}
