import React from "react";

const Song = ({CurrentSong}) => {
    return(
        <div className="song-container">
            
            <img src= {CurrentSong.cover} ></img>
            <h2>{CurrentSong.name}</h2>
            <h3>{CurrentSong.artist}</h3>
            
        </div>
    );
};
export default Song;