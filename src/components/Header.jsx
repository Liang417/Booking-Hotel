import { faBed, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className="headerSearchBar">
          <div className="searchBarItem">
            <FontAwesomeIcon icon={faBed} />
            <input className="searchInput" type="Search" placeholder="你要去那兒?"></input>
          </div>
          <div className="searchBarItem">
            <FontAwesomeIcon icon={faCalendar} />
            <span className="searchText">08/16/2022-08/16/2022</span>
          </div>
          <div className="searchBarItem">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span className="searchText">2位成人 · 1 間房</span>
          </div>
          <button className="searchBarBtn" type="submit">
            搜尋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
