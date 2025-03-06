import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function UserProfile() {
  const { state, dispatch } = useContext(AppContext);

  const login = () => {
    // Simulate user login
    const user = { id: 1, name: "John Doe" };
    dispatch({ type: "SET_USER", payload: user });
  };

  return (
    <div>
      <h1>User Profile</h1>
      {state.user ? (
        <p>Welcome, {state.user.name}!</p>
      ) : (
        <p>No user logged in.</p>
      )}
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default UserProfile;
