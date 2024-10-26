import React from 'react';

const VideoLink = () => {
    const videoId = '4YnXaYF9b9M';
    
    return (
        <div>
            <h2>Watch our Latest Practice Video</h2>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`} // Use the embed link format
                title="YouTube Video"
                allowFullScreen
            ></iframe>
            <p>
                <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                </a>
            </p>
        </div>
    );
};

export default VideoLink;