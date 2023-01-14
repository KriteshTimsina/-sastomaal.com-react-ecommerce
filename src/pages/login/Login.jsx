import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import ApiCallback from '../../components/ApiCallback/ApiCallback';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  async function getUserData() {
    const userData = await axios.post('https://dummyjson.com/auth/login',
      {
        username: 'kminchelle',
        password: '0lelplR',
      })
    console.log(userData);
  }
  return (
    <div className="login__page">
      <div className="login__container">

        <form action="#">
          <div className="container username">
            <input type="email" placeholder='Email Address' required autoComplete='false' />
          </div>
          <div className="container password">
            <input type="password" placeholder='Password' required autoComplete='false' />
          </div>

          <div className='container btn'>
            <button onClick={getUserData} className='button btn__login'>Login</button>
          </div>
          <div className='container link'>
            <span className='register__link'>Don't have an account? <a style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("/signup")}>Create One</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;