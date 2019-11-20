import React from 'react';
  
  export const todoReducer = (state, action) => {    
    switch (action.type) {
      case "SET_TITLE":
        return { ...state, title: action.payload };
      case "TOGGLE_EDITING":
        return { ...state, editing: !state.editing };
        default:
                    return state;

    }
  };