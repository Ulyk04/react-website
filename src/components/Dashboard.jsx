import React from 'react'
import { useSignOut, useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const auth = useAuthUser();
    const signOut = useSignOut();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      signOut(); // Выход
      navigate("/login"); // Перенаправление на страницу входа
    };
  
    return (
      <div>
        <h2>Добро пожаловать, {auth()?.email}!</h2>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    );
}

export default Dashboard;