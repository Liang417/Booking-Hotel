import React from 'react';
import '../styles/searchItem.scss';
import { Link } from 'react-router-dom';

const SearchItem = ({ active }) => {
  return (
    <div className={`searchItem ${active}`}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/347072190.webp?k=74cb5ec7f0ef6a6b424dca16d22b2e0b62c5438fbeef2e9f56bed64167dddbad&o=&s=1"
        alt=""
      />
      <div className="itemInfo">
        <div className="infoTitle">
          <h2>台南微醺文旅</h2>
          <div className="infoTitleRight">
            傑出
            <br />
            1213則評論
            <button className="rate">9.7</button>
          </div>
        </div>
        <div className="infoDes">
          <span className="distance">中西區 台南 400公尺遠</span>
          <span className="traffic">免費專機接送</span>
          <div className="infoDetail">
            <div className="detailLeft">
              <b>標準雙人房－附豪華衛浴</b>
              <p>一張雙人床</p>
              <br />
              <div className="detailDes">
                <b>免費取消</b>
                <p>立即搶下優惠價－可取消</p>
                <b>此價格的客房在本站僅剩 1 間</b>
              </div>
            </div>
            <div className="detailRight">
              <span className="optionDes">2位大人、1位小孩</span>
              <span className="price">TWD 4534 價格</span>
              <span className="tax">含稅費與其他費用</span>
              <Link to="/">
                <button className="btn">查看客房供應情況</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
