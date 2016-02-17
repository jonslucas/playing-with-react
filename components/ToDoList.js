'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../redux/actions';

// simple filter for showing only certain todo items
const getVisibile = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ACTIVE':
            return todos.filter(elem=>!elem.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(elem=>elem.completed);
        default:
            return todos;
    }

};
// mapXXXToProps for connect func
const mapStateToProps = (state) => {
  return {
      todos: getVisibile(state.toDoList, state.visFilter)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      onToDoClick: (id) =>{ dispatch(toggleToDo(id)) }
  };
};
// Presentaional Component - ToDo item
const ToDo = ({
    onClick,
    completed,
    text
    }) => (
        <div onClick={ onClick } className={completed? 'todo-done':'todo-active'}>
            { text }
        </div>

);
// Presentational Component - ToDo List
const ToDoList = ({
    todos,
    onToDoClick
}) => (
  <div className={todos.length>0?'todo-list': ''}>
      { todos.map(todo =>
            <ToDo key={ todo.id } {...todo} onClick={()=> onToDoClick(todo.id)} />
      )}
  </div>
);
// Container Component - connects to redux store, passes state and functionality to Presentation Layers
const VisibleToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);

export default VisibleToDoList