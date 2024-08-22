import React, { useEffect, useState } from "react";
import httpClient from "../httpClient";

function Home() {
  const [user, setUser] = useState(null);

  const logoutUser = async () => {
    await httpClient.post("//localhost:5555/logout");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5555/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to this React Application</h1>
      {user != null ? (
        <div>
          <h2>Logged in</h2>
          <h3>ID: {user.id}</h3>
          <h3>Email: {user.email}</h3>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in</p>
          <div>
            <a href="/login">
              <button>Login</button>
            </a>
            <a href="/register">
              <button>Register</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

