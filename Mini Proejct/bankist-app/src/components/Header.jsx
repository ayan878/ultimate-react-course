import React from 'react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

function Header() {
  const { isAuthenticated, username, pin, login, logout, setPin, setUsername } =
    useAuth();

  const handleLogin = () => {
    login();
  };

  return (
    <nav>
      <p className="welcome">Log in to get started</p>
      <img src={logo} alt="Logo" className="logo" />
      <form className="login">
        <input
          type="text"
          placeholder="Username"
          className="login__input login__input--user"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="PIN"
          maxLength={4}
          className="login__input login__input--pin"
          value={pin}
          onChange={e => setPin(e.target.value)}
        />
        {isAuthenticated ? (
          <button onClick={logout} className="login__btn">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="login__btn">
            Login
          </button>
        )}
      </form>
    </nav>
  );
}

export default Header;
