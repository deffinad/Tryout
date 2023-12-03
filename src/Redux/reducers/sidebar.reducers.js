import { INIT_SIDEBAR } from "../actions/types";

const initialState = {
    open: true,
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_SIDEBAR:
            return {
                ...state,
                open: action.payload
            };
        default:
            return state;
    }
}

export default sidebarReducer;
