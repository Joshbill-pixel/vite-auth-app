import React, { useState } from 'react';
import './Auth.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        referredBy: ''
      });
      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };




  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail(formData.email)) {
        alert("Invalid email format.");
        return;
    }
  
    console.log("Signup Data:", formData);
    alert("Signed up successfully!");
  };
  


  return (
    <div className="form-wrapper">
        {/* <div style={{ textAlign: 'center', marginTop: '1rem', width: '100%', height: 'auto' }}>
            <button onClick={() => setPage('signup')}>Sign Up</button>
            <button onClick={() => setPage('login')} style={{ marginLeft: '1rem' }}>Login</button>
        </div> */}

        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
            <input type="text" name="referredBy" placeholder="Referred By (optional)" onChange={handleChange} />
            <button type="submit">Sign Up</button>
        </form>
    </div>
   
  );
};

export default Signup;
