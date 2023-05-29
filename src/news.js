import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
function News(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
        console.log("I am useEffect");
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${props.newsName}&apiKey=03e69bb2c7b249d48f7c6425036b30fe`
          );
          const data = response.data;
          console.log(data.articles);
          setArticles(data.articles);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      }

    fetchArticles();
  }, [props.newsName]);

  console.log("I am render", articles.length);

  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
     {articles && articles.map((article) => (
        <div key={article.url} className="p-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={article.urlToImage} alt={article.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{article.title}</div>
              <p className="text-gray-700 text-base">{article.description}</p>
              <button className="font-bold text-xl mb-2">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </button>
            </div>
            
          </div>
        </div>
      ))}
      <Outlet />
    </div>
  );
}

export default News;
