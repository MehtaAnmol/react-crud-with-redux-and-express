import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
} from '../constants/ActionTypes'


const initialState = [
    {
        text: "Test todo",
        completed: false,
        id: 0
    }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)

        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, text: action.text } :
                    todo
            )

        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, completed: !todo.completed } :
                    todo
            )

        default:
            return state;
    }
}