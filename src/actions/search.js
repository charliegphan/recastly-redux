import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    })
  }
};

export default handleVideoSearch;
