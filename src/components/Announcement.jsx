import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/announcement.scss';

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="container">
        <div className="check">
          <input type="checkbox" name="checkbox" />
          此為差旅行程
        </div>
        <div className="COVID">
          <FontAwesomeIcon icon={faInfoCircle} />
          獲得所需建議。在出發之前，查看最新的新冠肺炎(COVID-19)相關限制。了解更多
        </div>
        <div className="discountInfo">
          <div className="left">
            <img
              src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="right">
            <h2>省20%或更多!</h2>
            <span>讓夢想之旅成真！2022年12月31日前預訂住房即可享有優惠。</span>
            <button>更多優惠</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
