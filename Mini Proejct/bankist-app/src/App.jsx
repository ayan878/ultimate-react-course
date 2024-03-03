// App.jsx
import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Balance from './components/Balance';
import CloseAccount from './components/CloseAccount';
import Header from './components/Header';
import Loan from './components/Loan';
import Movement from './components/Movement';
import Summary from './components/Summary';
import Transfer from './components/Transfer';

function App() {
  const { state } = useAuth();
  const isAuthenticated = state.isAuthenticated;
  // console.log(isAuthenticated);

  return (
    <AuthProvider>
      <Header />
      {isAuthenticated && (
        <main className="app">
          <Balance />
          <Movement />
          <Summary />
          <Transfer />
          <Loan />
          <CloseAccount />
        </main>
      )}
    </AuthProvider>
  );
}

export default App;
