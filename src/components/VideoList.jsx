import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) =>{
  const render = videos.map(video => {return <VideoItem
      onVideoSelect = {onVideoSelect}
      key={video.id}
      video={video}
    />
    });

  return (
    <div>
      <p>we have:{videos.length}</p>
      {render}
    </div>
    )



};

export default VideoList
