import { INIT_SIDEBAR } from "./types";

export const initSidebar = (param) => {
    return (dispatch) => {
       dispatch({type: INIT_SIDEBAR, payload: param})
    }
}