import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [accounts, setAccounts] = useState(() => []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/accounts');
        if (!res.ok) {
          throw new Error('Failed to fetch account data');
        }
        const data = await res.json();
        setAccounts(data);
      } catch (error) {
        console.error('Error fetching account data:', error);
      }
    };

    fetchData();
  }, []);

  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Find the account with the entered username
    const account = accounts.find(acc => acc.owner === username);
    if (account && !isNaN(parseInt(pin)) && account.pin === parseInt(pin)) {
      alert('Login successful');
      setIsAuthenticated(true);
      // Add your logic for handling successful login here
    } else {
      console.log('Invalid credentials');
      // Add your logic for handling invalid credentials here
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // Memoize context value
  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      username,
      setUsername,
      pin,
      setPin,
      login,
      logout,
    }),
    [isAuthenticated, username, pin]
  );

  // Render the Provider component with the context value and children
  return React.createElement(
    AuthContext.Provider,
    { value: contextValue },
    children
  );
};
