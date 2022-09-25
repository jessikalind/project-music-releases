import React from 'react';

const Artist = (props) => {
    return (

        <div>

            {props.artists.map((artist, index) => {
                return (

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={artist.uri}
                    key={artist.id}
                    className="artist-container">
                    {artist.name}
                    <span>{(props.artists.length - 1 > index) ? ((props.artists.length - 2 === index) ? ' & ' : ', ') : ''}</span>            
                </a>
                
                );
            })}

        </div>

    );
}      

export default Artist;