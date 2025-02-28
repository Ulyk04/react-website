import React from 'react'
import './login.css'
import Button from './Button'
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Login = () => {
 
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Получаем пользователя из localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (!storedUser || storedUser.password !== password) {
      alert("Неверный email или пароль!");
      return;
    }

    // Авторизуем пользователя
    signIn({
      token: "fake-jwt-token",
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: { email },
    });

    navigate("/dashboard"); // Перенаправляем на главную страницу
  };


  return (
        <div className='registr-page' >
            <article className="register-card">
                <div className="input-card">
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="register-button">
                    <button type='submit' >Log in</button>
                </div>
                <div className="card-text">
                    <h1>Registration</h1>
                </div>
            </article>

            <article className="login-step">
                <Button to='/registration'>Sign up</Button>
            </article>
    </div>
  )
}

export default Login