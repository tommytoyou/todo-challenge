import React, { useState, useEffect } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  //States
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  //useEffect
  //console.log is the first argument. [] is the second argument. For every time todos or status changes, 
  //[] will activate the console log
  useEffect(() => {
    // console.log("hey")
    filterHandler()
  }, [todos, status])
  //Functions
  //A function that filters through the todos. If a todo's completed is true, mark it as completed
  //If a todo's completed is false, then mark as uncompleted
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form 
        setStatus={setStatus} 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} />
      <ToDoList
        filteredTodos={filteredTodos}  
        setTodos={setTodos} 
        todos={todos}/>
    </div>
  );
}

export default App;
