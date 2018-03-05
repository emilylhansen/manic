export const fetchTopStories = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopBusiness = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopEntertainment = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopGeneral = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopHealth = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopScience = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopSports = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=e31273b82fa14d1380a5c584caf9f674',
    dataType: 'json'
  })
);

export const fetchTopTechnology = () => (
  $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e31273b82fa14d1380a5c584caf9f674',
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
