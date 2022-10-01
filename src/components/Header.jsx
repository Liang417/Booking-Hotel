import React from 'react';
import '../styles/header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">尋找下趟住宿</h1>
        <p className="headerDes">
          練習網頁製作，非營利用途
          <br />
          如有任何侵權請來信告知，拜託不要告我😢
        </p>
      </div>
    </div>
  );
};

export default Header;
