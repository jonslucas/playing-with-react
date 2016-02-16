'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../redux/actions';

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