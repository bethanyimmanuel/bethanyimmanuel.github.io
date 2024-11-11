import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LatestVideo = () => {
    const [videoId, setVideoId] = useState(''); /**videoId is the state and setVideoId is the function that updates the state */

    useEffect(() => {
        const fetchLatestVideo = async () => {
            const apiKey = '';
            const channelId = '';
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video`
            );
            if (response.data.items.length > 0) {
                setVideoId(response.data.items[0].id.videoId);  /** now this.videoId == videoId of first video in response */
            }
        };

        fetchLatestVideo();
    }, []);

    return (
        <div>
            <h2>Latest Practice Video</h2>
            {videoId && (
                <iframe>
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Latest Video"
                    frameBorder="0"
                    allowFullScreen
                </iframe>
            )}
        </div>
    );
};

export default LatestVideo;
