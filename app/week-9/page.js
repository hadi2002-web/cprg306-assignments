"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    console.log("clicked");   // debug
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {!user ? (
        <>
          <h1>Login Page</h1>
          <button onClick={handleLogin}>Login with GitHub</button>
        </>
      ) : (
        <>
          <h1>Week 9 - Shopping List</h1>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Sign Out</button>
          <br />
          <Link href="/week-9/shopping-list">
            Go to Shopping List
          </Link>
        </>
      )}
    </div>
  );
}