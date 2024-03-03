import React, { createContext, useContext, useEffect, useReducer } from 'react';

// Create the context
const AuthContext = createContext();

// Initial state for authentication
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  // Initialize state using the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Effect to fetch initial authentication data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/accounts');
        if (!res.ok) {
          throw new Error('Failed to fetch account data');
        }
        const data = await res.json();
        // Dispatch LOGIN action with fetched user data
        dispatch({ type: 'LOGIN', payload: data });
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only on mount

  // Login function to authenticate user
  const login = async (username, pin) => {
    try {
      // Perform login request to the server
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, pin }),
      });
      if (!res.ok) {
        throw new Error('Invalid credentials');
      }
      // Assuming the server response contains user data
      const userData = await res.json();
      // Dispatch LOGIN action with user data
      dispatch({ type: 'LOGIN', payload: userData });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Logout function to clear authentication state
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Console logs for debugging
  console.log('State on mount:', state);
  useEffect(() => {
    console.log('State after login/logout:', state);
  }, [state]); // Effect runs whenever state changes

  // Provide authentication context to children components
  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);
