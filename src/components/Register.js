import React, { useState } from "react";
import httpClient from "../httpClient";
import { API_URLS } from "../apiConfig"; // Import the centralized API URL

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const resp = await httpClient.post(API_URLS.REGISTER, { // Use centralized URL
        email,
        password,
      });

      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      } else {
        console.error("Error registering user:", error);
        alert("Registration failed, please try again later.");
      }
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={registerUser}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;

