import { combineReducer } from 'redux';

// reducer for todo item
const todo = (state, action)=>{
    "use strict";
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {completed: !state.completed});
        default:
            return state;

    }
};
// reducer for todo array
const toDoList = (state = [], action)=>{
    "use strict";
  switch(action.type){
      case 'ADD_TODO':
          return [
              ...state,
              todo(undefined, action)
          ];
      case 'REMOVE_TODO':
          return [
              ...state.slice(0, action.id),
              ...state.slice(action.index+1)
          ];
      case 'TOGGLE_TODO':
          return state.map(i=>todo(i, action));
      default:
          return state;

  }
};
// reducer for visibility filtering
const visFilter = (state='SHOW_ALL', action)=>{
    "use strict";
    switch (action.type) {
        case 'SET_VIS_FILTER':
            return action.filter;
        default:
            return state;

    }
};

export default toDoReducer = combineReducer({
    toDoList,
    visFilter
});