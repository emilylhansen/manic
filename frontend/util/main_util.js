export const fetchTopStories = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

// export const fetchTopStories = () => (
//   $.ajax({
//     method: 'get',
//     url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
//     dataType: 'json'
//   })
// );
//
// export const fetchNewStories = () => (
//   $.ajax({
//     method: 'get',
//     url: 'https://hacker-news.firebaseio.com/v0/newstories.json',
//     dataType: 'json'
//   })
// );
//
// export const fetchBestStories = () => (
//   $.ajax({
//     method: 'get',
//     url: 'https://hacker-news.firebaseio.com/v0/beststories.json',
//     dataType: 'json'
//   })
// );
//
// export const fetchStory = id => (
//   $.ajax({
//     method: 'get',
//     url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
//     dataType: 'json'
//   })
// );
//
// export const fetchComment = id => (
//   $.ajax({
//     method: 'get',
//     url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
//     dataType: 'json'
//   })
// );
