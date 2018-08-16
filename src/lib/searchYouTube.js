// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };

var searchYouTube2 = ({key, query, max = 5}, callback) => {
  var esc = encodeURIComponent;
  var data = {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }
  var query = Object.keys(data)
    .map(k => esc(k) + '=' + esc(data[k]))
    .join('&');

  fetch(`https://www.googleapis.com/youtube/v3/search?${query}`)
    .then(response => response.json())
    .then(data => data.items)
    .then(items => callback(items))
}

export default searchYouTube2;
