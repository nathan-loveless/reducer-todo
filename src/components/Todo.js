import React/*, { useReducer }*/ from 'react';
import '../components/Todo';
import './Todo.css';
import {initialState} from '../reducers/Reducers';

const Todo = (props) => {

  //const [state, dispatch] = useReducer(todoReducer, todoList);


  //let updatedClassCompletion = ' todo';

    
    const handleClick = e => {
      //e.preventDefault(); 
      props.completed();
      // props.dispatch({type: SET_CLASSNAME, payload: updatedClassCompletion + ' completed'});
      // props.dispatch({type: TOGGLE_COMPLETED})
      // console.log('NL: Todo.js: handleClick ', props.state);

    };

    return (
      <>
      <div>
        {initialState.map(todo => (
          <div onClick={handleClick}>
            <p>{todo.item}</p>
          </div>
        ))}
        
      </div>
      </>
    );
  }

export default Todo;