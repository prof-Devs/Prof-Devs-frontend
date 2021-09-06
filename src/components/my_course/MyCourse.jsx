import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { CourseContextProv } from "../../context/CourseContext";
import CourseRender from "../courseRendering/CourseRender";
import Course from "../creating/Course";
import CardGroup from "react-bootstrap/CardGroup";

import "./mycourse.css";

const host = "https://profdev-academy.herokuapp.com";

function MyCourse() {
  const authContext = useContext(AuthContext);
  const courseContextProv = useContext(CourseContextProv);

  const [data, setData] = useState([]);
  const [userCourses, setUserCourses] = useState([]);
  const [filterdData, setFilterdData] = useState([]);

  const token = authContext.token;
  console.log(token, "token");
  console.log("hiiii");

  console.log("user", authContext.user.email);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    console.log(authContext.role);

    (async () => {
      if (authContext.role === "user") {
        let result = await axios.get(`${host}/course/student`, config);

        console.log(result.data, "student section");

        setData(result.data);
      } else {
        let result = await axios.get(`${host}/course/teacher`, config);

        console.log(result.data, "teacher section");

        setData(result.data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authContext.role === "user") {
      let newData = data.filter((e) => {
        return e.courseStudents.filter((e2) => {
          console.log(e2, "e2");
          return e2 === `${authContext.user.user.email}`;
        });
      });
      setFilterdData(newData);
    } else {
      let newData = data.filter((e) => {
        return `${e.courseTeacher}` === authContext.user.user.email;
      });
      setFilterdData(newData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    console.log(filterdData, "hiiiiiiiii");
    setUserCourses(filterdData);
  }, [filterdData]);

  useEffect(() => {
    courseContextProv.setCourseDataById(userCourses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCourses]);

  return (
    <>
      {authContext.role === "editor" && <Course />}
      <CardGroup>
        {userCourses.map((item) => {
          return (
            <CourseRender
              _id={item._id}
              courseName={item.courseName}
              firstTeacherName={item.firstTeacherName}
              lastTeacherName={item.lastTeacherName}
              courseDisc={item.courseDisc}
            />
          );
        })}
      </CardGroup>
    </>
  );
}

export default MyCourse;
