import React, {createContext, useContext, useReducer} from "react"

const GlobalStateContext = createContext(null);

const UPDATE_APP = 'UPDATE_APP';

const initialState = {
    app: {
        user_name: "Default Name",
    }
};

const globalStateReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_APP:
            return {
                ...state,
                app: {...state.app, ...action.payload.item}
            };
        default:
            return state;
    }
};

export const GlobalStateProvider = ({ children}) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);
    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    )
};

const useGlobalState = () => {
    const [state, dispatch] = useContext(GlobalStateContext);

    const updateApp = (item) => {
        dispatch({
            type: UPDATE_APP,
            payload: {
                item
            }
        });
    };

    return {
        updateApp,
        state
    };
};

export default useGlobalState;
