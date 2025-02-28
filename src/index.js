import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "react-auth-kit";  // 🔥 Исправленный импорт
import { BrowserRouter } from "react-router-dom"; // 📌 Нужно, если используешь роутинг

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider
    authType={"localstorage"} 
    authName={"_auth"}
  >
    <BrowserRouter> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AuthProvider>
);
