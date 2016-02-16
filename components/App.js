'use strict';
import React, { Component } from 'react';
import ToDoInput from './ToDoInput';
import VisibleToDoList from './ToDoList';

class App extends Component {
    render() {
        return (
            <div>
                <ToDoInput />
                <VisibleToDoList />
            </div>
        );
    }
}

export default App