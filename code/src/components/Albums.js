import React from 'react';
import AlbumName from './sub-album/AlbumName';
import Artist from './sub-album/Artist';

const Albums = (props) => {
  return (
    <>
        <div className='album'>

        <img 
            src={props.data.images[1].url}
            className='album-cover'
            alt={props.data.name} 
        />

            <AlbumName />

            <Artist artists={props.data.artists}/>

        </div>
    </>
  );
} 

export default Albums;