import React from 'react';
import '../styles/feature.scss';
import Categories from './Categories';
import PostCards from './PostCards';
import { CategoriesType, CategoriesCities } from '../data.js';

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
      </div>
    </div>
  );
};

export default Feature;
