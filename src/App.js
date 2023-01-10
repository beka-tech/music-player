import React, {useState} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./util";

function App() {
  //
  const [song, setSong] = useState(data());
  const [CurrentSong, setCurrentSong] = useState(song[0])
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
     <Song CurrentSong={CurrentSong}/>
     <Player isPlaying={isPlaying}
             setIsPlaying={setIsPlaying}
             CurrentSong={CurrentSong}
              />
    </div>
  );
}

export default App;
