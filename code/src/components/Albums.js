import React from 'react';
import AlbumName from './sub-album/AlbumName';
import Artist from './sub-album/Artist';
import Buttons from './sub-album/Buttons';

const Albums = (props) => {
  return (
    <>
        <div className='album'>

            <div className='cover-and-btns'>
                <div className='image-overlay'></div>
                <img 
                    src={props.data.images[1].url}
                    className='album-cover'
                    alt={props.data.name} 
                />
                <Buttons />
            </div>

            <AlbumName album={props.data.name}/>

            <Artist artists={props.data.artists}/>
          
        </div>
    </>
  );
} 

export default Albums;