import './App.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import { useState } from 'react';

function App() {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };
  return (
    <>
    {showTaskForm && <TaskForm toggleTaskForm={toggleTaskForm} />}
    <Navbar/>
    <SearchBar toggleTaskForm={toggleTaskForm} />
    <TaskList/>
    </>
  );
}

export default App;
