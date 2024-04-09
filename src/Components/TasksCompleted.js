import React, { useState } from "react";

function TaskItem({ thirdArr, task, changeStatus, removeTaskFromThirdArray, updateCurrentTask, toggleEditTaskForm }) {
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
            updateCurrentTask(task,"third array");
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
            removeTaskFromThirdArray(thirdArr,task);
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
          defaultValue="Completed"
          className="text-light form-change"
          onChange={(event) => {
            changeStatus(
              event.target.value === null ? "Completed" : event.target.value,
              thirdArr,
              task,
              "third array"
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
  props.updateCounter3();
  return (
    <div className="taskList border border-3 border-success" style={{display:props.displayOnlyColumn3}}>
      <h4 style={{ textAlign: "center" }}>Completed (<b className="text-success">{props.counter3}</b>)</h4>
      <hr className="bg-primary text-primary fs-1 fw-bold"/>
      <div className="task">
        {props.thirdArr.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            thirdArr={props.thirdArr}
            changeStatus={props.changeStatus}
            removeTaskFromThirdArray={props.removeTaskFromThirdArray}
            updateCurrentTask={props.updateCurrentTask}
            toggleEditTaskForm={props.toggleEditTaskForm}
          />
        ))}
      </div>
    </div>
  );
}
