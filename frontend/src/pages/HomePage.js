import React from 'react';
import VideoLink from '../components/VideoLink';
import LatestVideo from '../components/LatestVideo';

const HomePage = () => {
    return (
        <div className="App">
          <h1>Welcome to Bethany Immanuel Website</h1>
          {/* <LatestVideo /> */}
          <VideoLink />
        </div>
    );
}

export default HomePage;