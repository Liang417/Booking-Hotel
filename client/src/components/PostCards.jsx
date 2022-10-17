import React from 'react';
import '../styles/postcards.scss';
import { Attractions } from '../data.js';
import PostCard from './PostCard';

const PostCards = () => {
  return (
    <div className="postCards">
      <div className="line">
        <PostCard data={Attractions.slice(0, 2)} />
      </div>
      <div className="line">
        <PostCard data={Attractions.slice(2, 5)} />
      </div>
    </div>
  );
};

export default PostCards;
