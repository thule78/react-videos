import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
      <div onClick={() => onVideoSelect(video)} className="ui middle aligned selection list">
        <div className="item">
          <img className="ui avatar image"
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
          />
          <div className="content">
            <div className="header">{video.snippet.title}</div>
          </div>
        </div>
      </div>

      );
};

export default VideoItem
