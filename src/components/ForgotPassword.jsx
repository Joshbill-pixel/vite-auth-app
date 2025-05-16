import React, { useState } from 'react';
import './Auth.css';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    newPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password Reset Request:", formData);
    alert("Password reset successful!");
  };

  return (
    <div className="form-wrapper">
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="password" name="newPassword" placeholder="New Password" required onChange={handleChange} />
            <button type="submit">Reset Password</button>
        </form>
    </div>
    
  )
};

export default ForgotPassword;
