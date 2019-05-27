import React from 'react';

const VideoDetails = ({video}) => {
  if(!video) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
      )
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} />

      </div>
      <div className="ui segment">
        <h3 className="header"> {video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
    );
};

export default VideoDetails
