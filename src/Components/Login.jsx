import React, { useState } from 'react';
import "./Style.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === 'Rani' && password.trim() === '1234') {
      window.location.href = "/products"
    } else {
      alert('Please enter both username and password correct.');
    }
  };

  return (
    <div className='container'>
      <div className='login_container'>
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
          <div className='login-grp'>
            <label htmlFor='username'>Username</label>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='login-grp'>
            <label htmlFor='password'>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type='submit' onClick={(e)=> handleSubmit(e)}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;