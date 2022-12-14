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
              <div className="title">??????????????????</div>
              <span className="closeSign" onClick={() => setOpenSlider(false)}>
                ??????
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
            <button>?????? & ??????</button>
            <button>??????</button>
            <button>????????????</button>
            <button>????????????</button>
          </div>
          <div className="hotelTitle">
            <div className="leftTitle">
              <span className="type">??????</span>
              <span className="name">??????????????????</span>
              <span className="recommend">
                <span className="recommendSvg">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                </span>
                ??????????????????
              </span>
              <div className="address">
                <FontAwesomeIcon icon={faLocationDot} /> ???????????????No. 28 Dade Street{' '}
                <a href="https://www.google.com.tw/maps">?????????????????????????????????</a>
              </div>
            </div>
            <div className="rightTitle">
              <button className="reservationBtn">????????????</button>
              <p>
                <FontAwesomeIcon icon={faHeartCircleCheck} /> <span>???????????????</span>
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
                ??????
                <br />
                1,024?????????
              </div>
            </div>
            <div className="hotelImg">
              {photos.slice(0, 6).map((item, index) =>
                index >= 5 ? (
                  <div className="imgWrap" key={index}>
                    <div className="more" onClick={() => clickSlider(index)}>
                      {photos.length > 6 ? `+${photos.length - 6}?????????` : '????????????'}
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
              <b>H& ?????????????????? I???????????? ????????????I H& tainan weshare hotel</b>
              <br />
              ??? 2017 ??? 1 ??? 10 ??????????????? Booking.com ??????????????????
              <br />
              ??????H& ?????????????????? I???????????? ????????????I H& tainan weshare hotel?????? Genius ?????????
              <br />
              ???????????????????????????????????????????????? H& ?????????????????? I????????????????????????I H& tainan weshare
              hotel ????????????????????? WiFi(??????)????????????????????????????????????????????????????????? 1.3
              ???????????????????????? 1.6 ?????????
              ?????????????????????????????????????????????????????????????????????????????????????????????
              <br />
              H& ?????????????????? I????????????????????????I H& tainan weshare hotel
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              10 ????????? ??????????????????????????????????????????????????????????????????
              ???????????????????????????????????????????????????????????????????????? 9.4 ???<h1>????????????</h1>
              <hr />
              <p className="textIcon">
                <FontAwesomeIcon icon={faWifi} className="wifi" />
                ?????????????????? <FontAwesomeIcon icon={faSmokingBan} />
                ????????????
              </p>
            </div>
            <div className="hotelDesPrice">
              <h2>????????????</h2>
              <p>
                ?????? 5 ????????????????????? ????????????????????????????????????????????????????????????????????? 9.3 ???
                ????????????????????????
              </p>
              <h2>TWD 6,240</h2>
              <button>????????????</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
