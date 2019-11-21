import React, { useState, useReducer } from 'react';
import Todo from './Todo';
import {todoReducer, todoList} from '../reducers/Reducers';
import { ADD_TODO, CLEAR_COMPLETED_TODOS } from '../actions/ReducerActions';


const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, todoList);
  const [task, setTask] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleChanges = e => {
    setTask(e.target.value);
  };


    return (
      <div> 
        <Todo />       
        <form onSubmit={handleSubmit}>
        <input
          onChange={handleChanges}
          type="text"
          name="addTodo"          
        />
        <button onClick={() => { todoList.push({item: task, completed: false, completedClass: ' todo', id: Date.now()}) 
                                  dispatch({type: ADD_TODO, payload: todoList})}}>Add Todo</button>
        <button onClick={() => {dispatch({type: CLEAR_COMPLETED_TODOS})}}>Clear Completed</button>
      </form>
        </div>
    );
}

export default TodoForm;