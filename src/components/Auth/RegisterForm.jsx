import React, { useState } from "react";
import { registerUser } from "../../services/AuthService";
import TextInput from "../Shared/TextInput.jsx";
import Button from "../Shared/Button.jsx";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await registerUser(username, password);
      setMessage(`Success: ${response.message}`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <TextInput
        label="Username"
        type="text"
        value={username}
        onChange={setUsername}
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <Button label="Register" onClick={handleRegister} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
