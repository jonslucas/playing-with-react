'use strict';
import React, { Component } from 'react';

class ToDoInput extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='todoInput' placeholder='Add Task Here' />
                <button type='submit'>Add Task</button>
            </div>
        );
    }
}

export default ToDoInput