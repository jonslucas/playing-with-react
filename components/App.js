'use strict';
import React from 'react';
import ToDoInput from './ToDoInput';
import VisibleToDoList from './ToDoList';
import Filters from './Filters';

const App = ()=>{
    return (
        <div className={'app-container'}>
            <Filters />
            <ToDoInput />
            <VisibleToDoList />
        </div>
    );
};

export default App