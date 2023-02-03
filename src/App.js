import React, {useState} from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./util";

function App() {
  //
  const [songs, setSongs] = useState(data());
  const [CurrentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
     <Song CurrentSong={CurrentSong}/>
     <Player isPlaying={isPlaying}
             setIsPlaying={setIsPlaying}
             CurrentSong={CurrentSong}
              />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
