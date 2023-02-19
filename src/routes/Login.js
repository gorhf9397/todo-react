import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("username", username);
    // 로컬 스토리지에 사용자 이름이 저장되어 있는지 확인
    if (localStorage.getItem("username") === username) {
      // 로그인 성공한 경우
      navigate("/todolist", { replace: true });
    } else {
      // 로그인 실패한 경우
      setError("Invalid username");
    }
  };

  return (
    <div className="container">
      <h1 className="title">LOGIN</h1>
      <form onSubmit={handleSubmit} className="loginForm">
        <div>
          <TextField
            id="filled-basic"
            label="이름을 입력해주세요"
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="loginBtn">
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}

export default Login;
