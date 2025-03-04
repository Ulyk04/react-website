import React, { useState } from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './registration.css';

const Registration = () => {
  

    return (
        <div className="registr-page">
            <article className="register-card">
                <form>
                    <div className="input-card">
                        <input
                            type="email"
                            placeholder='Email'
                        />
                        <input
                            type="password"
                            placeholder='Password'
                        />
                        <div className="register-button">
                            <button type="submit">Sign up</button>
                        </div>
                    </div>
                </form>
                <div className="card-text">
                    <h1>Registration</h1>
                </div>
            </article>
            <article className="login-step">
                <Button to="/login">LOGIN</Button>
            </article>
        </div>
    );
};

export default Registration;
