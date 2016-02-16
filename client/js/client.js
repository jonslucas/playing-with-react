'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../../components/App';
import toDoReducer from '../../redux/reducer';

render(<Provider store={ createStore(toDoReducer) }>
        <App />
       </Provider>,
    document.getElementById('app'));


