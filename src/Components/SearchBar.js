import React,{useState} from "react";

export default function SearchBar({toggleTaskForm}) {
 
  return (
    <>
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" , marginLeft:"10%", marginRight:"10%", marginTop:"4%"}}>
        <div>
          <input
            type="text"
            placeholder="search for tasks"
            style={{
              height: "6vh",
              width: "32vw",
              backgroundColor: "lightgrey",
              border: "none",
              borderRadius: 5,
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            height: "8vh",
            width: "18vw",
            border: "none",
            borderRadius: 5,
          }}
          onClick={toggleTaskForm}
        >
          Add New Task
        </button>
      </div>
    </div>
    </>
  );
}