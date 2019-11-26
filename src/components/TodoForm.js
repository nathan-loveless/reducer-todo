import React, { useState, useReducer } from 'react';
import Todo from './Todo';
import {todoReducer, initialState} from '../reducers/Reducers';
import { ADD_TODO, CLEAR_COMPLETED_TODOS, SET_CLASSNAME, TOGGLE_COMPLETED } from '../actions/ReducerActions';
import './Todo.css';


const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleChanges = e => {
    setTask(e.target.value);
  };

  const todoCompleted = () => {
    dispatch({type: SET_CLASSNAME, payload: ' todo' + ' completed'});
    dispatch({type: TOGGLE_COMPLETED});
    console.log('NL: TodoForm.js: todoCompleted reached', state)
  };


    return (
      <div> 
       <Todo completed={todoCompleted}/>
        <form onSubmit={handleSubmit}>
        <input
          onChange={handleChanges}
          type="text"
          name="addTodo"          
        />
        <button onClick={() => { initialState.push({item: task, completed: false, completedClass: ' todo', id: Date.now()}) 
                                  dispatch({type: ADD_TODO, payload: initialState})}}>Add Todo</button>
        <button onClick={() => {dispatch({type: CLEAR_COMPLETED_TODOS})}}>Clear Completed</button>
      </form>
      
        </div>
    );
}

export default TodoForm;