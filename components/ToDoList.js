'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../redux/actions';

const mapStateToProps = (state) => {
    console.log(state);
  return {
      todos: state.toDoList
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      onToDoClick: (id) =>{ dispatch(toggleToDo(id)) }
  };
};

const ToDo = ({
    onClick,
    completed,
    text
    }) => (
        <div onClick={ onClick } style={{ textDecoration: completed? 'line-through': 'none'}}>
            { text }
        </div>

);

const ToDoList = ({
    todos,
    onToDoClick
}) => (
  <div>
      { todos.map(todo =>
            <ToDo key={ todo.id } {...todo} onClick={()=> onToDoClick(todo.id)} />
      )}
  </div>
);

const VisibleToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);

export default VisibleToDoList