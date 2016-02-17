'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../redux/actions';

let ToDoInput = (
    { dispatch }
) => {
    let input;
    return (
          <div className={'todo-input'}>
              <input ref={node=>{input = node;}} placeholder='Add Task Here' />
              <button onClick={()=>{
              if (input.value) dispatch(addToDo(input.value));
              input.value = '';
              }}>
                  Add Task
              </button>
          </div>
    );

};
// Wraps element in container with access to redux store
ToDoInput = connect()(ToDoInput);

export default ToDoInput