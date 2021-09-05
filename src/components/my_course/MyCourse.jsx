import React, { useState, useEffect, useContext } from "react";
import "./MyCourse.scss";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

import { Link } from "react-router-dom";
import Course from "../creating/Course";

const host = "https://profdev-academy.herokuapp.com";

function MyCourse() {

  const authContext = useContext(AuthContext);
  const [data, setData] = useState([]);

  const token = authContext.token;
  console.log(token, "token");
  console.log('hiiii');

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    console.log(authContext.role);

    (async () => {
      if (authContext.role === "user") {
        let result = await axios.get(`${host}/course/student`, config);
        console.log(result.data, "student section");
        setData(result.data);

        // await fetch(`${host}/course/student`);
      } else {
        console.log("hellooo");
        let result = await axios.get(`${host}/course/teacher`, config);
        console.log(result.data, "teacher section");
        setData(result.data);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
      {authContext.role === "editor" && <Course />}
      <section class="page-contain">
        <Link to="/coursepage/0928130128" class="data-card">
          <h3>Music</h3>
          <h4>Ibrahim Abuawad</h4>
          <p>Music is my favorate subject</p>
          <span class="link-text">
            View All Providers
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                fill="black"
              />
            </svg>
          </span>
        </Link>
        <Link to="/coursepage/0928130128" class="data-card">
          <h3>Music</h3>
          <h4>Ibrahim Abuawad</h4>
          <p>Music is my favorate subject</p>
          <span class="link-text">
            View All Providers
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                fill="black"
              />
            </svg>
          </span>
        </Link>{" "}
        <Link to="/coursepage/0928130128" class="data-card">
          <h3>Music</h3>
          <h4>Ibrahim Abuawad</h4>
          <p>Music is my favorate subject</p>
          <span class="link-text">
            View All Providers
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                fill="black"
              />
            </svg>
          </span>
        </Link>{" "}
        <Link to="/coursepage/0928130128" class="data-card">
          <h3>Music</h3>
          <h4>Ibrahim Abuawad</h4>
          <p>Music is my favorate subject</p>
          <span class="link-text">
            View All Providers
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                fill="black"
              />
            </svg>
          </span>
        </Link>
      </section>
    </>
  );
}

export default MyCourse;
