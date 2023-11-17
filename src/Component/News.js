import { useState, useEffect } from 'react';
import Render from './Render.js';
import React from 'react';

export default function News({ category, country }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b96b16c334ae489f97c5de7ba37158b6`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((err) => {
        alert(err);
      });
    // alert(country)
    //console.log(news);
  }, [category, country]);

  return (
    <>
      <div className="m-4">
        <div className="row">
          <h3 className="text-center p-5">Category : {category.toUpperCase()}</h3>
          {news.length > 0 ? (
            news.map((n, pos) => (
              <div className="col-md-3" key={pos}>
                <Render
                  source={n.source.name}
                  title={n.title.slice(0, 30)}
                  description={n.description}
                  image={n.urlToImage}
                  url={n.url}
                  author={n.author}
                  time={n.publishedAt}
                  category={category}
                />
              </div>
            ))
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
