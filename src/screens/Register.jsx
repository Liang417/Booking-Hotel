import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/register.scss';
const Register = () => {
  return (
    <div className="register">
      <Navbar type={'simplify'} />
      <div className="container">
        <div className="wrapper">
          <h2 className="title">註冊帳戶</h2>
          <div className="form">
            <input type="email" id="email" placeholder="請輸入信箱" />
            <input type="password" id="password" placeholder="請輸入密碼" />
            <input type="password" id="checkPassword" placeholder="確認密碼" />
            <button>註冊</button>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span>已有帳戶? 按這裡登入</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
