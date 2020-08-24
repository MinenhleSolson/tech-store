import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is the way to use is in inside of a component
export const useStateValue = () => useContext(StateContext); 
