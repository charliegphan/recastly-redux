import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = ({video}) => (
    <VideoPlayer video={video}/>
);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

var mapStateToProps = (state) => {
    return {
        video: state.currentVideo
    }
} 

export default connect(mapStateToProps, null)(VideoPlayerContainer);
