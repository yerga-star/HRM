// UserContext.js
import React, { createContext, useContext, useState } from 'react';
import { users } from './user';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (username, password) => {
    // Simulate authentication with hardcoded user data
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      setLoggedInUser(user);
    }
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider value={{ user: loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
