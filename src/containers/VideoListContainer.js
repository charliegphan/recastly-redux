import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.


const mapDispatchToProps = (dispatch) => {
    return {
        handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.videoList
    }
}

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
