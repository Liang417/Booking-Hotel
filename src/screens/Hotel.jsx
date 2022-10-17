import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/hotel.scss';
import {
  faAngleLeft,
  faAngleRight,
  faHeartCircleCheck,
  faLocationDot,
  faPeopleGroup,
  faSmokingBan,
  faWifi,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';

const Hotel = () => {
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261708635.jpg?k=e7a9823c894a64cc4047d66d170b98d6ba2f061395f4207582f40407535f003d&o=&hp=1',
    },
    {
      src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261707388.jpg?k=15ccd09d838bf7f20853053e14cca116365b2ecdd0b86cf27f70275679976022&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ];
  const hoverHandler = (e) => {
    gsap.to('.commentInfo', {
      css: {
        display: 'flex',
        opacity: 1,
      },
      ease: 'power3.inOut',
    });
  };
  const hoverExitHandler = (e) => {
    gsap.to('.commentInfo', {
      css: {
        display: 'none',
        opacity: 0,
      },
      ease: 'power3.inOut',
    });
  };
  let commits = useRef(null);
  const [openSlider, setOpenSlider] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const clickSlider = (index) => {
    setOpenSlider(true);
    setSliderIndex(index);
  };
  const changeImg = (direction) => {
    direction === 'left'
      ? sliderIndex === 0
        ? setSliderIndex(photos.length - 1)
        : setSliderIndex(sliderIndex - 1)
      : sliderIndex === photos.length - 1
      ? setSliderIndex(0)
      : setSliderIndex(sliderIndex + 1);
  };
  return (
    <div className="Hotel">
      <Navbar />
      {openSlider && (
        <div className="slider">
          <div className="sliderWrapper">
            <div className="wrapperTitle">
              <div className="title">台南微醺文旅</div>
              <span className="closeSign" onClick={() => setOpenSlider(false)}>
                關閉
                <FontAwesomeIcon icon={faXmark} />
              </span>
            </div>
            <div className="wrapperBody">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="arrow"
                onClick={() => changeImg('left')}
              />
              <img src={photos[sliderIndex].src} alt="" />
              <FontAwesomeIcon
                icon={faAngleRight}
                className="arrow"
                onClick={() => changeImg('right')}
              />
            </div>
          </div>
        </div>
      )}
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelHeaderBtn">
            <button>資訊 & 房價</button>
            <button>設施</button>
            <button>訂房須知</button>
            <button>房客評價</button>
          </div>
          <div className="hotelTitle">
            <div className="leftTitle">
              <span className="type">飯店</span>
              <span className="name">台南微醺文旅</span>
              <span className="recommend">
                <span className="recommendSvg">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                </span>
                推薦四人住宿
              </span>
              <div className="address">
                <FontAwesomeIcon icon={faLocationDot} /> 台南中西區No. 28 Dade Street{' '}
                <a href="https://www.google.com.tw/maps">地理位置超棒－顯示地圖</a>
              </div>
            </div>
            <div className="rightTitle">
              <button className="reservationBtn">即刻預訂</button>
              <p>
                <FontAwesomeIcon icon={faHeartCircleCheck} /> <span>買貴退差價</span>
              </p>
            </div>
          </div>
          <div className="hotelImgWrapper">
            <div
              className="popupComment"
              onMouseEnter={(e) => hoverHandler(e)}
              onMouseOut={(e) => {
                hoverExitHandler(e);
              }}
            >
              <div
                className="commentInfo"
                ref={(element) => (commits = element)}
                onMouseEnter={(e) => {
                  hoverHandler(e);
                }}
              >
                <button className="commentRate">9.5</button>
                傑出
                <br />
                1,024則評論
              </div>
            </div>
            <div className="hotelImg">
              {photos.slice(0, 6).map((item, index) =>
                index >= 5 ? (
                  <div className="imgWrap" key={index}>
                    <div className="more" onClick={() => clickSlider(index)}>
                      {photos.length > 6 ? `+${photos.length - 6}張照片` : '觀看更多'}
                    </div>
                    <img src={item.src} alt="img" />
                  </div>
                ) : (
                  <div className="imgWrap" key={index}>
                    <img src={item.src} alt="img" onClick={() => clickSlider(index)} />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="hotelDes">
            <div className="hotelDesText">
              <b>H& 台南微醺文旅 I老宅古城 漫遊體驗I H& tainan weshare hotel</b>
              <br />
              自 2017 年 1 月 10 日開始接待 Booking.com 的旅客入住。
              <br />
              預訂H& 台南微醺文旅 I老宅古城 漫遊體驗I H& tainan weshare hotel可享 Genius 折扣！
              <br />
              只要登入，預訂此住宿即可省一筆。 H& 台南微醺文旅 I老宅古城漫遊體驗I H& tainan weshare
              hotel 位在台南，提供 WiFi(免費)、空調、共用休息室和花園，距離台南孔廟 1.3
              公里，距離赤崁樓 1.6 公里。
              部分房型提供附淋浴設施、拖鞋、吹風機和免費盥洗用品的私人衛浴。
              <br />
              H& 台南微醺文旅 I老宅古城漫遊體驗I H& tainan weshare hotel
              附近的人氣景點包括藍晒圖文創園區、新光三越台南新天地和林百貨。最近的機場是台南機場，距離這間住宿
              10 公里。 此區為台南的人氣推薦區域（依據真實住客評語）
              獨行旅客特別喜歡這個位置－並給他們的單獨住宿體驗 9.4 分<h1>熱門設施</h1>
              <hr />
              <p className="textIcon">
                <FontAwesomeIcon icon={faWifi} className="wifi" />
                免費無線網路 <FontAwesomeIcon icon={faSmokingBan} />
                禁菸客房
              </p>
            </div>
            <div className="hotelDesPrice">
              <h2>住宿特色</h2>
              <p>
                入住 5 晚的最佳選擇！ 此住宿位於台南評分最高的地區，地理位置評分高達 9.3 分
                深受獨行旅客歡迎
              </p>
              <h2>TWD 6,240</h2>
              <button>即刻預訂</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
