import React, { useState } from "react";
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:2489/test2",
        { email, password },
        { withCredentials: true }  // Ensure cookies are sent with the request
      )
      .then((res) => {
        console.log(res);
        console.log("Successfully LoggedIn");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginComponent;
