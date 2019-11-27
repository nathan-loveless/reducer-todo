import React from 'react';
import { ADD_TODO, CLEAR_COMPLETED_TODOS, TOGGLE_COMPLETED, SET_CLASSNAME } from '../actions/ReducerActions';

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]

  
  export const todoReducer = (state, action) => { 
    switch (action.type) {
      case ADD_TODO: 
        const item = action.payload;      
        return {...state, item};
      
      case TOGGLE_COMPLETED:
        return {...state, completed: !state.completed};
      
      
      case CLEAR_COMPLETED_TODOS: return { ...state, editing: !state.editing };

        default: return state;
    }
  };

      // const handleClick = e => {
    //   e.preventDefault(); 
    //   for(let i = 0; i < state.length; i++)
    //   {
    //     dispatch({ type: TOGGLE_COMPLETED})
    //     if(state[i].completed) { dispatch({type: SET_CLASSNAME, payload: ' completed'})}
    //     else { dispatch({type: SET_CLASSNAME, payload: ' todo'})}
    //   }
      
    //   console.log('NL: Todo.js: handleClick (AfterLoop): ', state);
    // };