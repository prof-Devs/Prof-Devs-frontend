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
 
  const [filterdData, setFilterdData] = useState([]);

  const token = authContext.token;


  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };


  // useEffect(() => {

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [authContext])


  useEffect(() => {


    (async () => {
  
    
      courseContextProv.setfirstTeacherName(authContext.pageUser.firstName)
      courseContextProv.setlastTeacherName(authContext.pageUser.lastName);

      if (authContext.role === "user") {
        let result = await axios.get(`${host}/course/student`, config);


        setData(result.data);
      } else {
        let result = await axios.get(`${host}/course/teacher`, config);


        setData(result.data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authContext]);

  useEffect(() => {
    if (authContext.role === "user") {
      let newData = []
      data.forEach((e) => {
         e.courseStudents.forEach((e2) => {
          //  e2 === `${authContext.user.user.email}`
           if(e2===authContext.user.user.email) newData.push(e)
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
  }, [data,authContext]);

  useEffect(() => {
    courseContextProv.setUserCourses(filterdData);
    courseContextProv.setCourseDataById(filterdData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterdData]);

  useEffect(() => {
    courseContextProv.setCourseDataById(courseContextProv.userCourses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseContextProv.userCourses]);

  return (
    <>
      {authContext.role === "editor" && <Course />}
      <CardGroup>
        {courseContextProv.userCourses.map((item) => {
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
