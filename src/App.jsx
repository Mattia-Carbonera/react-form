import { useState } from "react";
import "./css/App.css";
import articles from "./db/articles";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Form</h1>
        </div>

        <form>
          <input type="text" />
          <button>Crea</button>
        </form>

        <hr />
      </div>
    </>
  );
}

export default App;
