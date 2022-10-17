import React from 'react';
import '../styles/feature.scss';
import { CategoriesType, CategoriesCities } from '../data.js';
import Categories from './Categories';
import PostCards from './PostCards';
import PopularHotels from './PopularHotels';

const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="listTitle">
          <h2>依住宿類型瀏覽</h2>
        </div>
        <div className="listItems">
          <Categories data={CategoriesType} />
        </div>
        <div className="listItems">
          <PostCards />
        </div>
        <div className="listTitle">
          <h2>探索臺灣</h2>
          <p>這些熱門目的地魅力無窮，等你來體驗！</p>
        </div>
        <div className="listItems">
          <Categories data={CategoriesCities} />
        </div>
        <div className="listTitle">
          <h1>人氣民宿、公寓類型住宿</h1>
        </div>
        <div className="listItems">
          <PopularHotels />
        </div>
      </div>
    </div>
  );
};

export default Feature;
