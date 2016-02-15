'use strict';
import React, { Component } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

class App extends Component {
    render() {
        return (
            <div>
                <ToDoInput />
                <ToDoList />
            </div>
        );
    }
}

export default App