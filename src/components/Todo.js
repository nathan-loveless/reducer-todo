import React, { useReducer } from 'react';
import '../components/Todo';
import './Todo.css';
import {todoReducer, todoList} from '../reducers/Reducers';
import { SET_CLASSNAME, TOGGLE_COMPLETED } from '../actions/ReducerActions';

const Todo = () => {

  const [state, dispatch] = useReducer(todoReducer, todoList);


  //let updatedClassCompletion = ' todo';

    
    const handleClick = e => {
      e.preventDefault(); 
      for(let i = 0; i < state.length; i++)
      {
        dispatch({ type: TOGGLE_COMPLETED})
        if(state[i].completed) { dispatch({type: SET_CLASSNAME, payload: ' completed'})}
        else { dispatch({type: SET_CLASSNAME, payload: ' todo'})}
      }
      
      console.log('NL: Todo.js: handleClick (AfterLoop): ', state);
    };

    return (
      <div>
        {todoList.map(todo => (
          <div onClick={handleClick}>
            <p>{todo.item}</p>
          </div>
        ))}
        
      </div>
    );
  }

export default Todo;