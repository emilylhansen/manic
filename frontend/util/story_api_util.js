export const fetchTopStories = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchMostRecentStories = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopBusiness = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopEntertainment = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopGeneral = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=general&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopHealth = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=health&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopScience = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=science&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopSports = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=sports&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopTechnology = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=technology&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const searchStories = (words) => (
  $.ajax({
    method: 'get',
    url: `https://newsapi.org/v2/everything?q=${words.split(/[^A-Za-z]/).join("+")}&apiKey=e31273b82fa14d1380a5c584caf9f674`,
    dataType: 'json'
  })
);

export const searchPopularity = (words) => (
  $.ajax({
    method: 'get',
    url: `https://newsapi.org/v2/everything?q=${words.split(/[^A-Za-z]/).join("+")}&sortBy=popularity&apiKey=e31273b82fa14d1380a5c584caf9f674`,
    dataType: 'json'
  })
);

export const searchNewest = (words) => (
  $.ajax({
    method: 'get',
    url: `https://newsapi.org/v2/everything?q=${words.split(/[^A-Za-z]/).join("+")}&sortBy=publishedAt&apiKey=e31273b82fa14d1380a5c584caf9f674`,
    dataType: 'json'
  })
);

export const searchRelevancy = (words) => (
  $.ajax({
    method: 'get',
    url: `https://newsapi.org/v2/everything?q=${words.split(/[^A-Za-z]/).join("+")}&sortBy=relevancy&apiKey=e31273b82fa14d1380a5c584caf9f674`,
    dataType: 'json'
  })
);
