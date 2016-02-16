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

export { addToDo, toggleToDo };

