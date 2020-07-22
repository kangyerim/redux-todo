const initialState = {
    todos : []
}

export default function scheduleReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload]}

        case "TOGGLE_TODO":
            return {...state, //하나짜리 토글은 두고
            todos: state.todos.map(todo => todo.todoId === action.payload ?
                {...todo, complete: !todo.complete} : todo)}

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.todoId !== action.payload)
            }

        default:
            return state
    }
}