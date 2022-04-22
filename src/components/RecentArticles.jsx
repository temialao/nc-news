import { useState, useEffect } from "react";

const RecentArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fe-react-project.herokuapp.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <ul>
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <div className="article-card">
                <h3>{article.title}</h3>
                <p>By {article.author}</p>
                <p>{article.body.split(" ").slice(0, 7).join(" ")}...</p>
                <button>Read Article</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RecentArticles;
