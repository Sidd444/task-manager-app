import './App.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import TaskForm from './Components/TaskForm';
import { useState } from 'react';
import TasksYetToStart from './Components/TasksYetToStart';
import TasksInProgress from './Components/TasksInProgress';
import TasksCompleted from './Components/TasksCompleted';
import EditTaskForm from './Components/EditTaskForm';
import DisplayMobileBar from './Components/DisplayMobileBar';
import { useEffect } from 'react';

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
    setCounter1(firstArr.length);
  } console.log(firstArr);
  const[secondArr,setSecondArr]=useState([]);
  const[thirdArr,setThirdArr]=useState([]);

  //counter for each column
  const[counter1,setCounter1]=useState(firstArr.length);
  const[counter2,setCounter2]=useState(secondArr.length);
  const[counter3,setCounter3]=useState(thirdArr.length);
  function updateCounter1(){
    setCounter1(firstArr.length);
  }
  function updateCounter2(){
    setCounter2(secondArr.length);
  }
  function updateCounter3(){
    setCounter3(thirdArr.length);
  }
  
  //Deleting tasks from arrays
  function removeTaskFromFirstArray(arr,objToRemove){
    const newArray=arr.filter(obj => obj !== objToRemove);
    setFirstArr([...newArray]);
    updateCounter1();
  }
  function removeTaskFromSecondArray(arr,objToRemove){
    const newArray=arr.filter(obj => obj !== objToRemove);
    setSecondArr([...newArray]);
    updateCounter2();
  }
  function removeTaskFromThirdArray(arr,objToRemove){
    const newArray=arr.filter(obj => obj !== objToRemove);
    setThirdArr([...newArray]);
    updateCounter3();
  }

  //transferring tasks from one column to another
  const [currentStatus, setCurrentStatus] = useState("Not Started");
  function changeStatus(newStatus,arr,currObj,arrId) {
    setCurrentStatus(newStatus);
    const objToRemove = arr.find(obj => obj.name === currObj.name && 
    obj.description === currObj.description && obj.date===currObj.date &&
    obj.priority===currObj.priority );
    
     if(arrId==="first array") removeTaskFromFirstArray(arr,objToRemove);
    else if(arrId==="second array") removeTaskFromSecondArray(arr,objToRemove);
    else if(arrId==="third array") removeTaskFromThirdArray(arr,objToRemove);

    if(newStatus==="Not Started"){
      setFirstArr(prevArr => [...prevArr, currObj]);
      updateCounter1();
    }
    else if(newStatus==="In Progress"){
      setSecondArr(prevArr => [...prevArr, currObj]);
      updateCounter2();
    }
    else if(newStatus==="Completed"){
      setThirdArr(prevArr => [...prevArr, currObj]);
      updateCounter3();
    }
  }

 
  //search and update a task inside the array
  function searchAndUpdateFirstArray(copyObj){
    setFirstArr(prevArr =>
      prevArr.map((element, index) => {
        if (element.name === copyObj.name && element.description === copyObj.description && 
          element.date===copyObj.date && element.priority===copyObj.priority) {
          return taskObj;
        }
        return element;
      })
    );
  }
  function searchAndUpdateSecondArray(copyObj){
    setSecondArr(prevArr =>
      prevArr.map((element, index) => {
        if (element.name === copyObj.name && element.description === copyObj.description && 
          element.date===copyObj.date && element.priority===copyObj.priority) {
          return taskObj;
        }
        return element;
      })
    );
  }
  function searchAndUpdateThirdArray(copyObj){
    setThirdArr(prevArr =>
      prevArr.map((element, index) => {
        if (element.name === copyObj.name && element.description === copyObj.description && 
          element.date===copyObj.date && element.priority===copyObj.priority) {
          return taskObj;
        }
        return element;
      })
    );
  }
  
  //edit task form
  const[whichArrayToUpdate,setWhichArrayToUpdate]=useState("");
  const[showEditTaskForm,setShowEditTaskForm]=useState(false);
  const toggleEditTaskForm=()=>{
    setShowEditTaskForm(!showEditTaskForm);
  }
  function updateCurrentTask(toBeUpdatedObj,updateArrayId){
    setTaskObj({...taskObj,
     name:toBeUpdatedObj.name,
     description:toBeUpdatedObj.description,
     date:toBeUpdatedObj.date,
     priority:toBeUpdatedObj.priority
    });
    setWhichArrayToUpdate(updateArrayId);
  }

  //display columns in mobile one by one
  const[displayOnlyColumn1,setDisplayOnlyColumn1]=useState("");
  const[displayOnlyColumn2,setDisplayOnlyColumn2]=useState("");
  const[displayOnlyColumn3,setDisplayOnlyColumn3]=useState("");

  function letsDisplayOnlyColumn1(){
    setDisplayOnlyColumn1("");
    setDisplayOnlyColumn2("none");
    setDisplayOnlyColumn3("none");
  }
  function letsDisplayOnlyColumn2(){
    setDisplayOnlyColumn1("none");
    setDisplayOnlyColumn2("");
    setDisplayOnlyColumn3("none");
  }
  function letsDisplayOnlyColumn3(){
    setDisplayOnlyColumn1("none");
    setDisplayOnlyColumn2("none");
    setDisplayOnlyColumn3("");
  }
  function letsDisplayAllColumns(){
    setDisplayOnlyColumn1("");
    setDisplayOnlyColumn2("");
    setDisplayOnlyColumn3("");
  }

  const[allColumnsBg,setAllColumnsBg]=useState("purple");
  function colorAllButton(colorTime){
    setAllColumnsBg(colorTime)
  }
  //after screen is greater then 600 all columns will be displayed
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        letsDisplayAllColumns();
        colorAllButton("purple");
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return (
    <>
    {showEditTaskForm && <EditTaskForm  {...{taskObj,toggleEditTaskForm,searchAndUpdateFirstArray,setTaskObj,whichArrayToUpdate,
      searchAndUpdateSecondArray,searchAndUpdateThirdArray}} />}
    {showTaskForm && <TaskForm {...{toggleTaskForm,taskObj,submitTask,setTaskObj}} />}
    <Navbar/>
    <hr></hr>
    <SearchBar {...{toggleTaskForm}} />
    <DisplayMobileBar {...{counter1,counter2,counter3,letsDisplayOnlyColumn1,letsDisplayOnlyColumn2,letsDisplayOnlyColumn3,letsDisplayAllColumns,colorAllButton,allColumnsBg}} />
    <div id="all-tasks-display">
      <TasksYetToStart 
      {...{firstArr,currentStatus,changeStatus,removeTaskFromFirstArray,updateCurrentTask,toggleEditTaskForm,counter1,
      updateCounter1,displayOnlyColumn1,letsDisplayOnlyColumn1}}/>
      <TasksInProgress 
      {...{secondArr,currentStatus,changeStatus,removeTaskFromSecondArray,updateCurrentTask,toggleEditTaskForm,counter2,
      updateCounter2,displayOnlyColumn2}}/>
      <TasksCompleted 
      {...{thirdArr,currentStatus,changeStatus,removeTaskFromThirdArray,updateCurrentTask,toggleEditTaskForm,counter3,
      updateCounter3,displayOnlyColumn3,letsDisplayOnlyColumn3}}/>
    </div>
    </>
  );
}

export default App;