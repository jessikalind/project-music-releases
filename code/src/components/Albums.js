import React from 'react';
import data from '/Users/Linda/Desktop/MyProjects/project-music-releases/code/src/data.json';
import AlbumCover from './sub-album/AlbumCover';
import AlbumName from './sub-album/AlbumName';
import Artist from './sub-album/Artist';

const Albums = (props) => {
  return (
    <>
        <div className='album'>
            {data.albums.items.map(item => {
                return <AlbumName key={item.id} data={item}/>
            })}

            {data.albums.items.map(item => {
                return (
                item.artists.map(name => {
                return <Artist key={item.id} data={name}/>
                }))
            })}
        </div>
    {/* 
    <AlbumCover />
    <AlbumName />
    <Artist />
    */}
    </>
  );
} 

export default Albums;
