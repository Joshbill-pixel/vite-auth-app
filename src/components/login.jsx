import React, { useState } from 'react';
import './Auth.css';

const Login = ({ onForgotPassword }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", credentials);
    alert("Logged in!");
  };

  return (
    <div className="form-wrapper">
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            <button type="submit">Login</button>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button
                type="button"
                style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}
                onClick={onForgotPassword}
                >
                Forgot Password?
                </button>
            </p>
        </form>
    </div>
    
  );
};

export default Login;
