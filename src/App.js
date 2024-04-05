import './App.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import TaskForm from './Components/TaskForm';
import { useState } from 'react';
import TasksYetToStart from './Components/TasksYetToStart';
import TasksInProgress from './Components/TasksInProgress';
import TasksCompleted from './Components/TasksCompleted';
import EditTaskForm from './Components/EditTaskForm';

function App() {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  }; 
  const[taskObj,setTaskObj]=useState({
    name:"",
    description:"",
    date:"",
    priority:""
  })

  
  //All tasks array 
  const[firstArr,setFirstArr]=useState([]);
  function submitTask(){
    setFirstArr(prevArr => [...prevArr, taskObj]);
  } 
  const[secondArr,setSecondArr]=useState([]);
  const[thirdArr,setThirdArr]=useState([]);
  
  //Deleting tasks from arrays
  function removeTaskFromFirstArray(arr,objToRemove){
    const newArray=arr.filter(obj => obj !== objToRemove);
    setFirstArr([...newArray]);
  }
  function removeTaskFromSecondArray(arr,objToRemove){
    const newArray=arr.filter(obj => obj !== objToRemove);
    setSecondArr([...newArray]);
  }
  function removeTaskFromThirdArray(arr,objToRemove){
    const newArray=arr.filter(obj => obj !== objToRemove);
    setThirdArr([...newArray]);
  }

  //transferring tasks from one column to another
  const [currentStatus, setCurrentStatus] = useState("Not Started");
  function changeStatus(newStatus,arr,currObj,arrId) {
    setCurrentStatus(newStatus);
    const objToRemove = arr.find(obj => obj.name === currObj.name && 
    obj.description === currObj.description && obj.date===currObj.date &&
    obj.priority===currObj.priority );
    
     if(arrId==="first array")  removeTaskFromFirstArray(arr,objToRemove);
    else if(arrId==="second array") removeTaskFromSecondArray(arr,objToRemove);
    else if(arrId==="third array") removeTaskFromThirdArray(arr,objToRemove);

    if(newStatus==="Not Started") setFirstArr(prevArr => [...prevArr, currObj]);
    else if(newStatus==="In Progress") setSecondArr(prevArr => [...prevArr, currObj]);
    else if(newStatus==="Completed") setThirdArr(prevArr => [...prevArr, currObj]);
  }

  const[justCopy,setCopy]=useState({name:"empty"});
  function changeCopy(ob){
    setCopy({
      name:ob.name
    }) 
  }
  //search and update a task inside the array
  function searchAndUpdateFirstArray(copyObj){
    setFirstArr(prevArr =>
      prevArr.map((element, index) => {
        if (element.name === copyObj.name && element.description === copyObj.description) {
          return taskObj;
        }
        return element;
      })
    );
  }
  
  //edit task form
  const[showEditTaskForm,setShowEditTaskForm]=useState(false);
  const toggleEditTaskForm=()=>{
    setShowEditTaskForm(!showEditTaskForm);
  }
  function updateCurrentTask(toBeUpdatedObj){
    setTaskObj({...taskObj,
     name:toBeUpdatedObj.name,
     description:toBeUpdatedObj.description,
     date:toBeUpdatedObj.date,
     priority:toBeUpdatedObj.priority
    })
  }
  return (
    <>
    <h3>updated:{taskObj.name}    previous:{justCopy.name}</h3>
    {showEditTaskForm && <EditTaskForm  {...{changeCopy,taskObj,toggleEditTaskForm,searchAndUpdateFirstArray,setTaskObj}} />}
    {showTaskForm && <TaskForm {...{toggleTaskForm,taskObj,submitTask,setTaskObj}} />}
    <Navbar/>
    <SearchBar {...{toggleTaskForm}} />
    <div id="all-tasks-display">
      <TasksYetToStart 
      {...{firstArr,currentStatus,changeStatus,removeTaskFromFirstArray,updateCurrentTask,toggleEditTaskForm}}/>
      <TasksInProgress 
      {...{secondArr,currentStatus,changeStatus,removeTaskFromSecondArray}}/>
      <TasksCompleted 
      {...{thirdArr,currentStatus,changeStatus,removeTaskFromThirdArray}}/>
    </div>
    </>
  );
}

export default App;