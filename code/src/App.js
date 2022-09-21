import React from 'react';
import data from './data.json';
import Header from './components/Header';
import Albums from './components/Albums';

console.log(data);

export const App = () => {
  return (
    <>
        <Header />
        <section className='album-container'>
            {data.albums.items.map(item => {
                console.log(item);
                return <Albums key={item.id} data={item}/>
            })}
        </section>
      
      {/* <header /> */}
      {/* <Album components />*/}
        {/* Img */}
          {/* Hover: like-btn*/}
          {/* Hover: play-btn*/}
            {/* Hover: Hover play */}
          {/* Hover: ...-btn */}
        {/* Album name */}
          {/* Hover:underline*/}
        {/* Artist */}
          {/* Hover:underline*/}
    </>
  );
}
