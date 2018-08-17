import React from 'react';
import VideoListEntry from './VideoListEntry.js';
import PageButtons from './PageButtons.js';

var VideoList = ({videos, page, handleVideoListEntryTitleClick, handleIncrementPage, handleDecrementPage}) => {
  return (
    <div className="video-list">
      <PageButtons 
        handleIncrementPage={handleIncrementPage}
        handleDecrementPage={handleDecrementPage}
      />
      {
        videos.map((video, i) => {
          if (i >= page * 5 && i < page * 5 + 5) {
            return (
              <VideoListEntry
                key={video.etag}
                video={video}
                handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
              />
            );
          }
        })
      }
    </div>
  );
};

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
