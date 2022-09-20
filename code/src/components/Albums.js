import React from 'react';
import data from '/Users/Linda/Desktop/MyProjects/project-music-releases/code/src/data.json';
import AlbumCover from './sub-album/AlbumCover';
import AlbumName from './sub-album/AlbumName';
import Artist from './sub-album/Artist'

const Albums = (props) => {
  return (
    <>
    
        <h2>
            {props.data.name}
        </h2>
    {/* 
    <AlbumCover />
    <AlbumName />
    <Artist />
     */}
    </>
  );
}

export default Albums;
