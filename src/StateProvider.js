import React, { createContext, useReducer, useContext } from "react"

// Prepare datalayer
export const StateContext = createContext()

// Wrap app and provide the data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// pull info from the data layer
export const useStateValue = () => useContext(StateContext)