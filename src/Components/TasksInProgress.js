import React,{ useState } from 'react'

export default function TasksInProgress(props) {
  const [statusListDisplay, setStatusListDisplay] = useState("none");
  function changeStatusListDisplay(newDisplay) {
    setStatusListDisplay(newDisplay);
  }
  const [taskWindowDisplay, setTaskWindowDisplay] = useState("none");
  function changeDisplay(newDisplay) {
    setTaskWindowDisplay(newDisplay);
  }
  const [editButtonDisplay, setEditButtonDisplay] = useState("flex");
  function changeButtonDisplay(newDisplay) {
    setEditButtonDisplay(newDisplay);
  }
  return (
    <div>
         <div
        style={{
          height: "50vh",
          width: "25vw",
          backgroundColor: "lightgrey",
          padding: 5,
        }}
      >
        <h4 style={{ textAlign: "center" }}>In Progress</h4>
        <hr style={{ backgroundColor: "red" }} />
        <div>
          {props.secondArr.map((obj, index) => (
            <div className="task-style" key={index}>
              <p>Name:{obj.name}</p>
              <p>Description:{obj.description}</p>
              <p>Date:{obj.date}</p>
              <p>Priority:{obj.priority}</p>
              <p>Status:{props.currentStatus}</p>
              <button
                className="update-existing-task"
                style={{ display: editButtonDisplay }}
                onClick={() => {
                  changeButtonDisplay("none");
                  changeDisplay("flex");
                }}
              >
                update
              </button>
              <div
                className="task-edit-window"
                style={{ display: taskWindowDisplay }}
                onClick={() => {
                  changeStatusListDisplay("flex");                 
                }}
              >
                <button>Edit</button>
                <button
                  onClick={() => {
                    changeDisplay("none");                   
                  }}
                >
                  Update Status
                </button>
                <button
                 onClick={()=>{
                  props.removeTaskFromSecondArray(props.secondArr,obj);
                  changeStatusListDisplay("none");
                  changeDisplay("flex");
                }}
                >Delete</button>
              </div>
              <div
                className="change-status-list"
                style={{ display: statusListDisplay }}
              >
                <select
                  defaultValue="In Progress"
                  onChange={(event) => {
                    props.changeStatus(
                      event.target.value === null? "In Progress": event.target.value,
                      props.secondArr,
                      obj,
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
          ))}
        </div>
      </div>
    </div>
  )
}
