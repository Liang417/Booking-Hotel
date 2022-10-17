import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/login.scss';

const Login = () => {
  return (
    <div className="login">
      <Navbar type={'simplify'} />
      <div className="container">
        <div className="wrapper">
          <h2 className="title">登入帳戶</h2>
          <div className="form">
            <input type="email" id="email" placeholder="帳號" />
            <input type="password" id="password" placeholder="密碼" />
            <button>登入</button>
            <span>忘記密碼?</span>
            <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span>創建帳號</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
