import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskForm({ toggleTaskForm }) {
  const[arr,setArr]=useState([]);
  const[taskObj,setTaskObj]=useState({
    name:"",
    description:"",
    date:"",
    priority:""
  })
  function submitTask(){
    setArr(prevArr => [...prevArr, taskObj]);
  }
  <TaskList taskInfo={arr}/> 
  return (
    <div>
      <div>{taskObj.name}</div>
      <form
        style={{
          marginLeft: "38%",
          border: "1px solid silver",
          padding: "2%",
          borderRadius: 8,
          width: "30vw",
          boxShadow: "0px 0px 10px 10px silver",
          zIndex: "300",
          position: "fixed",
          backgroundColor: "white"
        }}
      >
        <button
          style={{
            color: "red",
            background: "none",
            border: "none"
          }}
          onClick={toggleTaskForm}
        >
          X
        </button>

        <div style={{ marginLeft: "3%", textAlign: "center" }}>
          <h2>Add New Task</h2>

          <p style={{ fontWeight: "bold" }}>Task Name</p>
          <input
            id="taskNameInput"
            type="text"
            placeholder="eg.- Design a Website"
            style={{ width: "70%" }}
            onChange={(event) => (setTaskObj({...taskObj, name: event.target.value}))}
          />

          <p style={{ fontWeight: "bold" }}>Description</p>
          <input
            id="taskDescriptionInput"
            type="text"
            placeholder="Description here"
            style={{ height: "30vh", width: "70%" }}
            onChange={(event) => (setTaskObj({...taskObj, description:event.target.value}))}
          />

          <p style={{ fontWeight: "bold" }}>Set Deadline</p>
          <input
            id="taskDateInput"
            type="date"
            style={{ width: "70%", fontWeight: "bolder" }}
            onChange={(event) => (setTaskObj({taskObj,date: event.target.value}))}
          />

          <p style={{ fontWeight: "bold" }}>Set Priority</p>
          <label
            style={{ display: "flex", justifyContent: "center", gap: "7px" }}
          >
            <input id="radioButtonLow" type="radio" name="Priority" 
             onChange={() => setTaskObj({...taskObj,priority: "low"})}
             checked={taskObj.priority === "low"}
            />
            low
            <input id="radioButtonMid" type="radio" name="Priority" 
             onChange={() => setTaskObj({...taskObj,priority: "medium"})}
             checked={taskObj.priority === "medium"}
            />
            medium
            <input id="radioButtonHigh" type="radio" name="Priority" 
             onChange={() => setTaskObj({...taskObj,priority: "high"})}
             checked={taskObj.priority === "high"}
            />
            high
          </label>

          <div>
            <button
              style={{
                height: "5vh",
                width: "40%",
                backgroundColor: "rgb(38, 38, 235)",
                color: "white",
                marginTop: "3%",
                border: "none"
              }}
              onClick={(event) => {
                event.preventDefault(); 
                submitTask(); 
                toggleTaskForm();
            }}
            >
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
