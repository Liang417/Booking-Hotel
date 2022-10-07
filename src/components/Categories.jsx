import React from 'react';
import '../styles/categories.scss';

const Categories = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="item" id={index}>
          <img src={item.img} alt="" />
          <div className="itemInfo">
            <div className="title">{item.name}</div>
            <div className="amount">{item.amount}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Categories;
