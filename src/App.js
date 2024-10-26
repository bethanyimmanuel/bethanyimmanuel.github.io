import logo from './logo.svg';
import './App.css';
import React from 'react';
import LatestVideo from './components/LatestVideo';
import VideoLink from './components/VideoLink';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Bethany Immanuel Website</h1>
      {/* <LatestVideo /> */}
      <VideoLink />
    </div>
  );
}

export default App;
