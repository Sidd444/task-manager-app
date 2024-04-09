import React, { useState } from "react";

function TaskItem({ secondArr, task, changeStatus, removeTaskFromSecondArray, updateCurrentTask, toggleEditTaskForm }) {
  const [statusListDisplay, setStatusListDisplay] = useState("none");
  const [taskWindowDisplay, setTaskWindowDisplay] = useState("none");
  const [editButtonDisplay, setEditButtonDisplay] = useState("flex");

  function changeStatusListDisplay(newDisplay) {
    setStatusListDisplay(newDisplay);
  }

  function changeDisplay(newDisplay) {
    setTaskWindowDisplay(newDisplay);
  }

  function changeButtonDisplay(newDisplay) {
    setEditButtonDisplay(newDisplay);
  }


    let priorityClass = '';
    switch (task.priority) {
      case 'low':
        priorityClass = 'bg-success';
        break;
      case 'medium':
        priorityClass = 'bg-warning';
        break;
      case 'high':
        priorityClass = 'bg-danger';
        break;
      default:
        priorityClass = 'bg-secondary';
    }
  return (
    <div className="task-style">
      <div className="priority-and-update">
      <p className={`task-p task-p-prio ${priorityClass}`}>{task.priority}</p>
      <button
        className="update-existing-task"
        style={{ display: editButtonDisplay,border:"none" }}
        onClick={() => {
          // changeButtonDisplay("none");
          changeDisplay("flex");
        }}
      >
        ...
      </button>
      <div className="task-edit-window" style={{ display: taskWindowDisplay }}>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => {
            changeDisplay("none");
            changeStatusListDisplay("none");
            // changeButtonDisplay("flex");
            updateCurrentTask(task,"second array");
            toggleEditTaskForm();
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            changeDisplay("none");
            changeStatusListDisplay("flex");
            changeButtonDisplay("none");
          }}
        >
          Update Status
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            removeTaskFromSecondArray(secondArr,task);
            changeStatusListDisplay("none");
            changeDisplay("none");
            changeButtonDisplay("flex");
          }}
        >
          Delete
        </button>
      </div>
      <div className="change-status-list" style={{ display: statusListDisplay }}>
        <select
          defaultValue="In Progress"
          className="text-light form-change"
          onChange={(event) => {
            changeStatus(
              event.target.value === null ? "In Progress" : event.target.value,
              secondArr,
              task,
              "second array"
            );
            changeStatusListDisplay("none");
            changeButtonDisplay("flex");
          }}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      </div>
      
      <p className="task-p text-primary" style={{ fontWeight: "bolder" }}>{task.name}</p>
      <p className="task-p task-description text-secondary">{task.description}</p>
      <p className="task-p-last"><i class="fa fa-solid fa-hourglass text-warning"></i> {task.date}</p>
      
      
      
    </div>
  );
}

export default function TasksInProgress(props) {
  props.updateCounter2();
  return (
    <div className="taskList border border-3 border-warning" style={{display:props.displayOnlyColumn2}}>
      <h4 style={{ textAlign: "center" }}>In Progress (<b className="text-warning">{props.counter2}</b>)</h4>
      <hr className="bg-primary text-primary fs-1 fw-bold"/>
      <div className="task">
        {props.secondArr.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            secondArr={props.secondArr}
            changeStatus={props.changeStatus}
            removeTaskFromSecondArray={props.removeTaskFromSecondArray}
            updateCurrentTask={props.updateCurrentTask}
            toggleEditTaskForm={props.toggleEditTaskForm}
          />
        ))}
      </div>
    </div>
  );
}
