import React from 'react';
import { useUser } from './UserContext';

function LoginTest() {
  const { user, logout } = useUser();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login to access this content.</p>
      )}
    </div>
  );
}

export default LoginTest;
