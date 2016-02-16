'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../redux/actions';

let ToDoInput = (
    { dispatch }
) => {
    let input;
    return (
          <div>
              <input ref={node=>{input = node;}} placeholder='Add Task Here' />
              <button onClick={()=>{
              dispatch(addToDo(input.value));
              input.value = '';
              }}>
                  Add Task
              </button>
          </div>
    );

};

ToDoInput = connect()(ToDoInput);

export default ToDoInput