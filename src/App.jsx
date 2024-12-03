import { useState } from "react";
import "./css/App.css";
import articles from "./db/articles";

function App() {
  const [articlesList, setArticleList] = useState(articles);
  const [input, setInput] = useState("");

  // click handler
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // submit handler
  const articlesListHandler = (e) => {
    e.preventDefault();

    const newArticleList = [...articlesList];
    newArticleList.push({ title: input });

    setArticleList(newArticleList);
  };

  // delete title handler
  const deleteItemHandler = (articleDeleted) => {
    const deletedArticles = articlesList.filter((article) => {
      return article != articleDeleted;
    });

    setArticleList(deletedArticles);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Form</h1>
        </div>

        <form onSubmit={articlesListHandler}>
          <input type="text" onChange={handleInput} />
          <button>Crea</button>
        </form>

        <hr />

        <div className="articles-section">
          <ul>
            {articlesList.map((article, index) => (
              <li key={index}>
                <div className="title-container">
                  <h2>{article.title}</h2>
                  <button onClick={() => deleteItemHandler(article)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
