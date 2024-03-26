import React from "react";

export default function TaskStatus({status,taskInfo}) {
  const taskInfoDisplay = taskInfo && taskInfo.length > 0 ? taskInfo : [
    {
      name:"empty",
      description:"empty",
      date:"empty",
      priority:"empty"
    }];
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
        <h4 style={{ textAlign: "center" }}>{status}</h4>
        <hr style={{ backgroundColor: "red" }} />
        <div>
          {taskInfoDisplay[0].name}
          {taskInfoDisplay[0].description}
          {taskInfoDisplay[0].date}
          {taskInfoDisplay[0].priority}
        </div>
      </div>
    </div>
  );
}