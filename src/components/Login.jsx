import React from 'react'
import './login.css'
import Button from './Button'

const Login = () => {

  return (
        <div className='registr-page' >
            <article className="register-card">
                <div className="input-card">
                    <input type="email" placeholder='Email'  />
                    <input type="password" placeholder='Password'  />
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
