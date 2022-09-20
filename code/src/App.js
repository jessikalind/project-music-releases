import React from 'react';
import data from './data.json';
import Header from './components/Header';
import Albums from './components/Albums';

console.log(data);

export const App = () => {
  return (
    <>
        <Header />
        <Albums />
      
      
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
