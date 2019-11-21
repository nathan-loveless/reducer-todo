import React from 'react';
import { ADD_TODO, CLEAR_COMPLETED_TODOS, TOGGLE_COMPLETED, SET_CLASSNAME } from '../actions/ReducerActions';

export const todoList = [
  {
    item: 'Learn about reducers',
    completed: false,
    completedClass: ' todo',
    id: 3892987589
  }
]

  
  export const todoReducer = (state, action) => { 
    switch (action.type) {
      case ADD_TODO: 
        const item = action.payload;      
        return {...state, item};
      
      case SET_CLASSNAME:
        return {...state, completedClass: state.completedClass + action.payload};
      
      case TOGGLE_COMPLETED:
        return {...state, completed: !state.completed};
      
      
      case CLEAR_COMPLETED_TODOS: return { ...state, editing: !state.editing };

        default: return state;
    }
  };