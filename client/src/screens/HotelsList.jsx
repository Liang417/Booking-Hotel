import React, { useState } from 'react';
import '../styles/hotelsList.scss';
import Navbar from '../components/Navbar.jsx';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import * as locales from 'react-date-range/dist/locale';
import SearchItem from '../components/SearchItem';
import { useLocation } from 'react-router-dom';

const HotelsList = () => {
  const location = useLocation();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openCondition, setOpenCondition] = useState(false);
  const [dates, setDates] = useState(location.state?.dates);
  const [destination, setDestination] = useState(location.state?.destination);
  const [conditions, setConditions] = useState(location.state?.conditions);
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
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="searchBar">
            <div className="searchTitle">找尋下一趟住宿</div>
            <div className="listItem">
              <label>目的地 / 住宿名稱:</label>
              <input
                type="text"
                className="searchInput"
                placeholder={destination === '' ? '要去那兒?' : destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="listItem">
              <label>入住/退房日期:</label>
              <span className="dates">
                <div className="searchInput" onClick={() => setOpenCalendar(!openCalendar)}>
                  {format(dates[0].startDate, 'MM/dd/yyyy')} -{' '}
                  {format(dates[0].endDate, 'MM/dd/yyyy')}
                </div>
                {openCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    minDate={new Date()}
                    locale={locales['zhTW']}
                  />
                )}
              </span>
            </div>
            <div className="listItem">
              <div className="listItemLimitPrice">
                <label>每晚最低價格:</label>
                <input type="text" className="searchInput" />
              </div>
              <div className="listItemLimitPrice">
                <label>每晚最高價格:</label>
                <input type="text" className="searchInput" />
              </div>
              <div className="listItemConditions">
                <span className="SearchText" onClick={() => setOpenCondition(!openCondition)}>
                  {conditions.adult} 位成人 · {conditions.children} 位小孩 · {conditions.room} 間房
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
            </div>
            <div className="listItem">
              <button className="searchBtn">搜尋</button>
            </div>
          </div>
          <div className="listResult">
            <div className="resultTitle">
              <h2>在台南找到1024間房間</h2>
              <div className="map">
                <button>在地圖上顯示</button>
              </div>
            </div>
            <SearchItem active="active" />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsList;
