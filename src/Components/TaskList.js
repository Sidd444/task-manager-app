import React from 'react'
import TaskStatus from './TaskStatus'

export default function TaskList({taskInfo}) {
  return (
    <div>
    <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"3%"}}>
      <TaskStatus status="Yet To Start" taskInfo={taskInfo}/>
      <TaskStatus status="In Progress"/>
      <TaskStatus status="To Be Completed" />
    </div>
    </div>
  )
}

