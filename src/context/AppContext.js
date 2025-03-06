import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  user: null,
  appointments: [],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_APPOINTMENTS":
      return { ...state, appointments: action.payload };
    case "ADD_APPOINTMENT":
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    default:
      return state;
  }
};

// Create context
export const AppContext = createContext();

// Context provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
