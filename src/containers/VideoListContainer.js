import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = ({ videos, handleVideoListEntryTitleClick}) => (
    <VideoList 
        videos={videos} 
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
    />
);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.


const mapDispatchToProps = (dispatch) => {
    return {
        handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        videos: state.videoList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
