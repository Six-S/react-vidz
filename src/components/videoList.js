import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem 
            onVideoSelect={onVideoSelect}
            video={video}
            key={video.id.videoId}
        />
    });

    return(
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )
}

export default VideoList;