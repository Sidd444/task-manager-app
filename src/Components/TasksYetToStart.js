import React,{ useState } from "react";

export default function TasksYetToStart(props) {
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
        <h4 style={{ textAlign: "center" }}>Yet To Start</h4>
        <hr style={{ backgroundColor: "red" }} />
        <div>
          {props.firstArr.map((obj, index) => (
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
              >
                <button
                  onClick={() => {
                    changeDisplay("none"); 
                    changeStatusListDisplay("none");
                    changeButtonDisplay("flex"); 
                    props.updateCurrentTask(obj);
                    props.toggleEditTaskForm();                 
                  }}
                >Edit</button>
                <button
                  onClick={() => {
                    changeDisplay("none");  
                    changeStatusListDisplay("flex");                
                  }}
                >
                  Update Status
                </button>
                <button
                 onClick={()=>{
                  props.removeTaskFromFirstArray(props.firstArr,obj);
                  changeStatusListDisplay("none");
                  changeDisplay("none");
                  changeButtonDisplay("flex");
                }}
                >Delete</button>
              </div>
              <div
                className="change-status-list"
                style={{ display: statusListDisplay }}
              >
                <select
                  onChange={(event) => {
                    props.changeStatus(
                      event.target.value === null? "Not Started": event.target.value,
                      props.firstArr,
                      obj,
                      "first array"
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
  );
}
