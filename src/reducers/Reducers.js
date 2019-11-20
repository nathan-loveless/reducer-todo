import React from 'react';
import { ADD_TODO, CLEAR_COMPLETED_TODOS, MARK_COMPLETED } from '../actions/ReducerActions';

export const todoList = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]

  
  export const todoReducer = (state, action) => { 
    console.log('NL: Reducers.js: todoReducer: ', state); 
    console.log('NL: Reducers.js: todoReducer: ', action.payload);  
    switch (action.type) {
      case ADD_TODO: 
        const item = action.payload;      
        return {...state, item}
      
      case CLEAR_COMPLETED_TODOS: return { ...state, editing: !state.editing };
        case MARK_COMPLETED: return { ...state, editing: !state.editing };
        default: return state;
    }
  };