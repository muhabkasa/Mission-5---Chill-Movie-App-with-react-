import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'; 

import logo from '../assets/images/logo.png';
import googleIcon from '../assets/images/google-icon.png';
import eyeOffIcon from '../assets/images/eye-off-icon.png';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register diklik!");
    navigate('/'); 
  };

  return (
    <div className="login-page">
      <main className="card-container">
        <img src={logo} alt="logo" className="logo-img" />
        
        <div className="card-header">
          <p>Daftar</p>
          <p>Selamat datang!</p>
        </div>

        <form className="card-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="form-label" htmlFor="username">Username</label>
            <input 
              className="form-input" 
              type="text" 
              id="username" 
              placeholder="Masukkan username" 
              required 
            />
          </div>

          <div className="input-group">
            <label className="form-label" htmlFor="password">Kata Sandi</label>
            <input 
              className="form-input" 
              type="password" 
              id="password" 
              placeholder="Masukkan kata sandi" 
              required 
            />
            <img src={eyeOffIcon} alt="eye-off" className="password-icon" />
          </div>

          <div className="input-group">
            <label className="form-label" htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
            <input 
              className="form-input" 
              type="password" 
              id="confirmPassword" 
              placeholder="Masukkan kata sandi" 
              required 
            />
            <img src={eyeOffIcon} alt="eye-off" className="password-icon" />
            
            <div className="form-footer">
              <p>Sudah punya akun? <Link to="/">Masuk</Link></p>
            </div>
          </div>

          <button type="submit" className="form-button form-button-primary">Daftar</button>
          <p className="separator">Atau</p>
          
          <button type="button" className="form-button form-button-google">
            <img src={googleIcon} alt="google" />
            <span>Daftar dengan Google</span>
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;