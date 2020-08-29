import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './left-panel/video.js'

function App() {
  return (
    <div className="App">
      <VideoPlayer link='series/welcome.mp4'/>
    </div>
  );
}

export default App;
