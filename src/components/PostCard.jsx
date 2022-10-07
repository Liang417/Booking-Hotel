import React from 'react';
import '../styles/postcard.scss';

const PostCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="cardContainer" key={index}>
            <img className="imgBg" src={item.img} alt="" />
            <div className="itemInfo">
              <h1>
                {item.name}
                <img src={item.flag} alt="" />
              </h1>
              <p>{item.amount}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostCard;
