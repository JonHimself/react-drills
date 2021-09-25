import React, { useState } from "react";

const InputBois = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (e) => {
    setUserName(e.target.value);
    console.log(username);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleClick = (user, pass) => {
    setPassword("");
    setUserName("");
    return alert(`Username: ${user}  Password: ${pass}`);
  };

  return (
    <div>
      <input
        value={username}
        onChange={handleUser}
        placeholder="username"
        type="text"
      />
      <input
        value={password}
        onChange={handlePass}
        placeholder="password"
        type="text"
      />
      <button
        onClick={() => {
          handleClick(username, password);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default InputBois;
