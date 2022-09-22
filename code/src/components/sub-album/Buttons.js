import React from 'react';
import likeBtn from '/Users/Linda/Desktop/MyProjects/project-music-releases/code/src/icons/heart.svg';
import playBtn from '/Users/Linda/Desktop/MyProjects/project-music-releases/code/src/icons/play.svg';
import moreBtn from '/Users/Linda/Desktop/MyProjects/project-music-releases/code/src/icons/dots.svg';

const Buttons = () => {
  return (
    <div className='btn-container'>
        <button id='like-btn' className='btn like'> 
            <img src={likeBtn} alt='like button'/>
        </button>

        <button id='play-btn' className='btn play'> 
            <img src={playBtn} alt='play button'/>
        </button>

        <button id='more-btn' className='btn more'> 
            <img src={moreBtn} alt='more button'/>
        </button>
    </div>
  );
}

export default Buttons;