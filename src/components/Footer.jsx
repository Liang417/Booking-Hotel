import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="up">
          <h2>省時又省錢👍</h2>
          <p>立刻訂閱，我們將寄送最佳訂房優惠給您。</p>
          <div className="emailContainer">
            <div className="wrapper">
              <input type="email" placeholder="您的電子郵件" />
              <button>訂閱 !</button>
            </div>
            <div className="checkText">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <p>請發送 Booking.com 免費 App 下載連結給我！</p>
            </div>
          </div>
        </div>
        <div className="down">
          <button>將您的住宿註冊</button>
          <hr />
          <ul>
            <li>手機版</li>
            <li>您的帳戶</li>
            <li>線上修改訂單</li>
            <li>客服支援</li>
            <li>加入聯盟行銷</li>
            <li>企業差旅服務</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
