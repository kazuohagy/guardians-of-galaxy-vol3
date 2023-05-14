import logo from './logo.svg';
import './App.css';
import image from './img/gotg-vol3-guardians-of-the-galaxy-vol3.gif';
import prev from './img/prev.png';
import play from './img/play.png';
import next from './img/next.png';
import { useState } from 'react';

import spaceMusic from './music/space.mp3';
import creepMusic from './music/Creep (Acoustic.mp3';
import blueSkMusic from './music/Mr Blue Sk.mp3';
import dogDaysMusic from './music/dogsDayOver.mp3';
import mountainMusic from './music/best.mp3';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    const audio = document.getElementById('music');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const songs = [
    { title: 'In the Meantime', src: spaceMusic },
    { title: 'Creep', src: creepMusic },
    { title: 'Mr Blue Sk', src: blueSkMusic },
    { title: 'Dog Days Are Over', src: dogDaysMusic },
    { title: 'Aint No Mountain High Enough', src: mountainMusic }
  ];

  const playNextSong = () => {
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextSongIndex);
    setIsPlaying(false);
  };
  const playPrevSong = () => {
    const nextSongIndex = (currentSongIndex - 1) % songs.length;
    setCurrentSongIndex(nextSongIndex);
    setIsPlaying(false);
  };

  return (
    <div className="App">
      <div className="player">
        <div className="logo">
          <img src={image} alt="Logo" />
        </div>

        <h2>{songs[currentSongIndex].title}</h2>

        <audio id="music" src={songs[currentSongIndex].src}></audio>

        <div className="controls">
          <button id="prevButton" onClick={playPrevSong}>
            <img src={prev} alt="Anterior" />
          </button>
          <button onClick={playMusic}>
            <img src={play} alt="Play/Pausar" />
          </button>
          <button onClick={playNextSong} id="nextButton">
            <img src={next} alt="Próximo" />
          </button>
        </div>

        <div className="footer">
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>

        <div className="time">
          <span id="currentTime">00:00</span>
          <span id="duration">00:00</span>
        </div>
      </div>
    </div>
  );
}

export default App;
