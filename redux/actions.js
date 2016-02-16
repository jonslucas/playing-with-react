let nextToDoId = 0;
const addToDo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextToDoId++,
        text
    }
};

const toggleToDo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

const setVizFilter = (filter) => {
    return {
        type: 'SET_VIS_FILTER',
        filter
    };
};

export { addToDo, toggleToDo, setVizFilter };

