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


  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {

    (async () => {
      if (authContext.role === "user") {
        let result = await axios.get(`${host}/course/student`, config);


        setData(result.data);
      } else {
        let result = await axios.get(`${host}/course/teacher`, config);


        setData(result.data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authContext.role === "user") {
      let newData = []
      data.forEach((e) => {
         e.courseStudents.forEach((e2) => {
          //  e2 === `${authContext.user.user.email}`
           if(e2==authContext.user.user.email) newData.push(e)
        });
      });
      console.log(11111,newData)
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
    setUserCourses(filterdData);
    courseContextProv.setCourseDataById(filterdData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
