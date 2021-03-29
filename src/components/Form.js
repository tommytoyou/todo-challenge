import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    
    const inputTextHandler = (e) => {
       //TODO TRACK USER INPUT
       //HINT: USE setInputText
       
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
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
            <input data-testid='input' 
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" />
            <button data-testid='submit-test' className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select data-testid='select' onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option data-testid='completed' value="completed">Completed</option>
                <option data-testid='uncompleted' value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
