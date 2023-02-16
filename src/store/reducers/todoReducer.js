import { CHANGE_INPUT } from "../actionTypes/todoActiontypes";

const initialState = {
    todoInputValue: '',
    todos: [
        {
            text: 'vacho',
            id:1,
        },
        {
            text: 'yoyoyoyoy',
            id:2
        }
    ],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                todoInputValue: action.payload,
            }
        default:
            return state
    }
}