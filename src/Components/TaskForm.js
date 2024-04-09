import React from "react";

export default function TaskForm(props) {
  
  return (
    <div>
      <form>
        <button
          id="form-cancel-button"
          onClick={props.toggleTaskForm}
          style={{backgroundColor:"red",color:"white",fontWeight:"bolder",border:"none"}}
        >
        &#x2715;
        </button>

        <div style={{ marginLeft: "3%", textAlign: "center" }}>
          <h2>Add New Task</h2>

          <p style={{ fontWeight: "bold" }}>Task Name</p>
          <input
            id="taskNameInput"
            type="text"
            placeholder="eg.- Design a Website"
            style={{ width: "70%" }}
            onChange={(event) => (props.setTaskObj({...props.taskObj, name: event.target.value}))}
          />

          <p style={{ fontWeight: "bold" }}>Description</p>
          <textarea
            id="taskDescriptionInput"
            type="text"
            placeholder="Description here"
            style={{ height: "30vh", width: "70%" }}
            onChange={(event) => (props.setTaskObj({...props.taskObj, description:event.target.value}))}
          />

          <p style={{ fontWeight: "bold" }}>Set Deadline</p>
          <input
            id="taskDateInput"
            type="date"
            style={{ width: "70%", fontWeight: "bolder" }}
            onChange={(event) => (props.setTaskObj({...props.taskObj,date: event.target.value}))}
          />

          <p style={{ fontWeight: "bold" }}>Set Priority</p>
          <label
            style={{ display: "flex", justifyContent: "center", gap: "7px" }}
          >
            <input id="radioButtonLow" type="radio" name="Priority" 
             onChange={() => props.setTaskObj({...props.taskObj,priority: "low"})}
             checked={props.taskObj.priority === "low"}
            />
            low
            <input id="radioButtonMid" type="radio" name="Priority" 
             onChange={() => props.setTaskObj({...props.taskObj,priority: "medium"})}
             checked={props.taskObj.priority === "medium"}
            />
            medium
            <input id="radioButtonHigh" type="radio" name="Priority" 
             onChange={() => props.setTaskObj({...props.taskObj,priority: "high"})}
             checked={props.taskObj.priority === "high"}
            />
            high
          </label>

          <div>
            <button
              id="add-task-button"
              onClick={(event) => {
                event.preventDefault(); 
                props.submitTask(); 
                props.toggleTaskForm();
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