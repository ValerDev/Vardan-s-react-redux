import { CHANGE_INPUT } from "../actionTypes/todoActiontypes"

export const changeInputAC = (payload) => {
    return {
        type: CHANGE_INPUT,
        payload: payload
    }
}