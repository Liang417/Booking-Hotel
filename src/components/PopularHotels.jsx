import React from 'react';
import '../styles/popularHotel.scss';
import { PopularHotelsData as data } from '../data.js';

const PopularHotels = () => {
  return (
    <div className="popularHotels">
      {data.map((item, index) => {
        return (
          <div className="item" key={index}>
            <img src={item.img} alt="" />
            <div className="itemInfo">
              <div className="hotelName">{item.name}</div>
              <div className="place">{item.place}</div>
              <div className="price">TWD {item.price.toLocaleString()} 起</div>
              <div className="rate">
                <button>{item.rate}</button>
                <span>{item.rate >= 9.5 ? '好極了' : '傑出'}</span>
                <p>{item.comment}則評論</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularHotels;
