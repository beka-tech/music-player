import React,{useRef, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faAngleLeft,faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"
const Player = ({CurrentSong, isPlaying, setIsPlaying}) => {

    const audioRef = useRef(null);

    const playSongHandler = () =>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

     const timeUpdateHandler = (e) => {
        const Current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: Current, duration: duration})
     };
     const getTime = (time) => {
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60 )).slice(-2)
        );
     }
     const dragHandler = (e) => {
        setSongInfo({...songInfo, currentTime: e.target.value});
    }
    const [songInfo, setSongInfo] = useState({
        currentTime : null,
        duration : null,
    })
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                  min={0}
                  max={songInfo.duration}
                  value={songInfo.currentTime}
                  onChange={dragHandler}

                  type="range"/>
                <p>{getTime(songInfo.duration)}</p>
                
                 </div>
            <div className="play-control" > 
            <FontAwesomeIcon className="skip-back" size ="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon 
               onClick={playSongHandler} 
               className="play" 
               size ="2x" 
               icon={isPlaying ? faPause : faPlay}

               />
            <FontAwesomeIcon className="Skip-forward" size ="2x" icon={faAngleRight}/>
            </div>
            <audio 
                   onTimeUpdate={timeUpdateHandler} 
                   onLoadedMetadata={timeUpdateHandler}
                   ref={audioRef} 
                   src={CurrentSong.audio}>
            </audio>
        </div>

    );
}
export default Player;