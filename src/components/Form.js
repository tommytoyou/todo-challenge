import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    //Here before the return you can write JS code and functions
    const inputTextHandler = (e) => {
       //TODO TRACK USER INPUT
       //HINT: USE setInputText
    }
    const submitTodoHandler = (e) => {
        //Prevents page from refreshing when we hit enter to submit input   
        e.preventDefault()
        setTodos([
            ...todos, //!!! ...todos is necessary to prevent overwriting in the array list
            //...todos: If there are already elements in the array, include them as well 
            //Removed ...todos for right now. May only be able to do ...todos if you omit typing in props by
            //changing the form function to const Form = ({setInputText, todos, setTodos}) => {}
            //{setInputText, todos, setTodos} lets you bypass writing props everytime
            //Do not do Math.random() to set an ID for an actual application. This is for speed
            {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        //TODO: CLEAR USER INPUT
        
    }
    const statusHandler = (e) => {
        //TODO: TRACK USER INPUT
    }
    
    //TODO: GET FORM BUTTON TO WORK
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
