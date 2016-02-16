'use strict';
import React, { Component } from 'react';
import ToDoInput from './ToDoInput';
import VisibleToDoList from './ToDoList';
import Filters from './Filters';

class App extends Component {
    render() {
        return (
            <div>
                <Filters />
                <ToDoInput />
                <VisibleToDoList />
            </div>
        );
    }
}

export default App