import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import { incrementPage, decrementPage } from './../actions/page.js';



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.


const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
    handleIncrementPage: () => dispatch(incrementPage()),
    handleDecrementPage: () => dispatch(decrementPage())
  };
};

const mapStateToProps = ({ videoList, page }) => {
  return {
    videos: videoList,
    page: page
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
