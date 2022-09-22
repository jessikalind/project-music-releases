import React from 'react';
import likeBtn from 'icons/heart.svg';
import playBtn from 'icons/play.svg';
import moreBtn from 'icons/dots.svg';

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