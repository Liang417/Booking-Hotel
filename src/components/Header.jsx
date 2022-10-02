import { faBed, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../styles/header.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import * as locales from 'react-date-range/dist/locale';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openCondition, setOpenCondition] = useState(false);
  const [destination, setDestination] = useState('');

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [conditions, setConditions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });
  const countHandler = (name, sign) => {
    sign === '+'
      ? setConditions((pre) => {
          return { ...pre, [name]: conditions[name]++ };
        })
      : setConditions((pre) => {
          return { ...pre, [name]: conditions[name]-- };
        });
  };
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
            <input
              className="searchInput"
              type="Search"
              placeholder="你要去那兒?"
              onChange={(e) => setDestination(e.target.value)}
            ></input>
          </div>
          <div className="searchBarItem">
            <FontAwesomeIcon icon={faCalendar} onClick={() => setOpenCalendar(!openCalendar)} />
            <span className="searchText" onClick={() => setOpenCalendar(!openCalendar)}>
              {format(dates[0].startDate, 'MM/dd/yyyy')} - {format(dates[0].endDate, 'MM/dd/yyyy')}
            </span>
            {openCalendar && (
              <DateRange
                className="calendar"
                editableDateInputs={true} //允許修改日期
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
                ranges={dates}
                onChange={(item) => setDates([item.selection])}
                locale={locales['zhTW']} //改成中文
              />
            )}
          </div>
          <div className="searchBarItem">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              onClick={() => setOpenCondition(!openCondition)}
            />
            <span className="searchText" onClick={() => setOpenCondition(!openCondition)}></span>
            <span onClick={() => setOpenCondition(!openCondition)}>
              {conditions.adult}位成人,{conditions.children}位小孩,{conditions.room}間房
            </span>
            {openCondition && (
              <div className="conditionContainer">
                <div className="condition">
                  成人
                  <div className="conditionCounter">
                    <button
                      className="countBtn"
                      onClick={() => countHandler('adult', '-')}
                      disabled={conditions.adult <= 1}
                    >
                      -
                    </button>
                    <span className="count">{conditions.adult}</span>
                    <button className="countBtn" onClick={() => countHandler('adult', '+')}>
                      +
                    </button>
                  </div>
                </div>
                <div className="condition">
                  <span>
                    小孩
                    <p>0-17歲</p>
                  </span>
                  <div className="conditionCounter">
                    <button
                      className="countBtn"
                      onClick={() => countHandler('children', '-')}
                      disabled={conditions.children <= 0}
                    >
                      -
                    </button>
                    <span className="count">{conditions.children}</span>
                    <button className="countBtn" onClick={() => countHandler('children', '+')}>
                      +
                    </button>
                  </div>
                </div>
                <div className="condition">
                  房間
                  <div className="conditionCounter">
                    <button
                      className="countBtn"
                      onClick={() => countHandler('room', '-')}
                      disabled={conditions.room <= 1}
                    >
                      -
                    </button>
                    <span className="count">{conditions.room}</span>
                    <button className="countBtn" onClick={() => countHandler('room', '+')}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
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
