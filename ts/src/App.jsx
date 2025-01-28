
/*import React, { useRef, useState } from "react";
import "./App.css"; // Add this for styling if needed

function App() {
  const inputRef = useRef(null); // Ref for text box
  const timerIdRef = useRef(null); // Ref for timer ID
  const [timer, setTimer] = useState(10); // State for timer countdown
  const [isRunning, setIsRunning] = useState(false); // State to track if the timer is running

  const focusTextBox = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerIdRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(timerIdRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(10);
  };

  return (
    <div className="App">
      <h1>Magical Timer and Input Box</h1>

      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
        autoFocus
      />
      <button onClick={focusTextBox}>Focus Box</button>

      
      <div className="timer">
        <h2>
          {timer === 0 ? (
            <span style={{ color: "red", fontWeight: "bold" }}>Time's Up!</span>
          ) : (
            `Time Left: ${timer}s`
          )}
        </h2>
        <button onClick={startTimer} disabled={isRunning}>
          Start Timer
        </button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
  );
}

export default App;*/


import React, { useRef, useState } from "react";
import "./App.css"; // Import the CSS file

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="video-player-container">
      <video ref={videoRef}>
        <source
          src="https://www.shutterstock.com/shutterstock/videos/3508246067/preview/stock-footage-tall-modern-buildings-covered-in-vertical-gardens-showcasing-urban-greenery-and-sustainable.webm"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleFullscreen}>Fullscreen</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
