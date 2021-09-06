import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "./authContext";



export const DropContext = React.createContext();
const host = "https://profdev-academy.herokuapp.com";


function DropListContext(props) {
    const authContext = useContext(AuthContext);
    const [allAssignments, setAllAssignments] = useState([]);
    let token = authContext.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    async function getAssignmentsHandler() {
        try {
            const data = await axios.get(`${host}/assignment/teacher`, config);
            console.log(data.data, "inside getAssignment");
            setAllAssignments(data.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    async function deleteAssignment(id) {
        console.log('before');
        allAssignments.map(async element => {
            if (element._id === id) {
                console.log('id', id);
                await axios.delete(`${host}/assignment/${id}`, config);
                const data = await axios.get(`${host}/assignment/teacher`, config);
                setAllAssignments(data.data);
            }
        })
    }

    const [assignmentInfo, setAssignmentInfo] = useState({
        title: "",
        text: "",
        due_date: "",
    });

    function handleChangeAssignment(e) {
        let value = e.target.value;
        let name = e.target.name;
        setAssignmentInfo({
            ...assignmentInfo,
            [name]: value,
        });
    }

    async function updateAssignmentHandler(id,e) {
        e.preventDefault();
        console.log('before');
        let obj = {
            title: assignmentInfo.title,
            text: assignmentInfo.text,
            due_date: assignmentInfo.due_date,
        };
        allAssignments.map(async element => {
            if (element._id === id) {
                console.log('id', id);
                await axios.put(`${host}/assignment/${id}`, obj, config);
                const data = await axios.get(`${host}/assignment/teacher`, config);
                setAllAssignments(data.data);
            }
        })
    }


    const state = {
        allAssignments,
        getAssignmentsHandler,
        deleteAssignment,
        handleChangeAssignment,
        updateAssignmentHandler,
        assignmentInfo,
    }


    return (
        <DropContext.Provider value={state}>
            {props.children}
        </DropContext.Provider>
    )
}

export default DropListContext
