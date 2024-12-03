import { useState } from "react";
import "./css/App.css";
import articles from "./db/articles";

function App() {
  const [articlesList, setArticleList] = useState(articles);
  const [inputTitle, setInputTitle] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");

  // click handler
  const handleInput = (e) => {
    setInputTitle(e.target.value);
    setInputAuthor(e.target.value);
  };

  // submit handler
  const articlesListHandler = (e) => {
    e.preventDefault();

    const newArticleList = [...articlesList];
    newArticleList.push({ title: inputTitle, author: inputAuthor });

    setArticleList(newArticleList);
  };

  // edit item handler
  const editItem = (modifyArticle, index) => {
    const modifyArticleList = [...articlesList];

    const newModifyArray = modifyArticleList.map((articleItem) =>
      articleItem == modifyArticle
        ? { title: "ciao", author: "ciao" }
        : articleItem
    );

    console.log(newModifyArray);
    setArticleList(newModifyArray);
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
          <input type="text" onChange={handleInput} placeholder="Titolo" />
          <input type="text" onChange={handleInput} placeholder="Autore" />

          <button>Crea</button>
        </form>

        <hr />

        <div className="articles-section">
          <ul>
            {articlesList.map((article, index) => (
              <li key={index}>
                <div className="article-container">
                  <div className="article-content">
                    <h2>{article.title}</h2>
                    <span>{article.author}</span>
                  </div>
                  <button
                    onClick={() => editItem(article, index)}
                    className="button"
                  >
                    <i className="fa-solid fa-pen-to-square edit"></i>
                  </button>
                  <button
                    onClick={() => deleteItemHandler(article)}
                    className="button"
                  >
                    <i className="fa-solid fa-trash trash"></i>
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
