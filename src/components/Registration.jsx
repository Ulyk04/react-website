import React from 'react'
import './registration.css'
import Button from './Button'
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";


export const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = useSignIn();
    const navigate = useNavigate();
  
    const handleRegister = (e) => {
      e.preventDefault();
  
      // Проверяем, есть ли такой пользователь (из localStorage)
      const existingUser = localStorage.getItem(email);
      if (existingUser) {
        alert("Такой пользователь уже существует!");
        return;
      }
  
      // Сохраняем пользователя
      localStorage.setItem(email, JSON.stringify({ email, password }));
  
      // Логиним его сразу после регистрации
      signIn({
        token: "fake-jwt-token",   // Тут обычно будет реальный токен с backend'а
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email },
      });
  
      navigate("/dashboard"); // Перенаправляем на главную страницу
    };
  

  return (
    <div className='registr-page' >
        <article className="register-card">
            
                
                <form onSubmit={handleRegister}>
                  <div className="input-card">
                    <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                  <div className="register-button">
                    <button type='submit' >Sign up</button>
                  </div>
                  </div>
                </form>
                
           
            
            <div className="card-text">
                <h1>Registration</h1>
            </div>
        </article>

        <article className="login-step">
            <Button to={'/login'} >LOGIN</Button>
        </article>
    </div>
  )
}

export default Registration
