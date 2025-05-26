import { useState } from 'react'

import defaultArticles from './assets/data/articlesList'

export default function App() {
  const [title, setTitle] = useState('');
  const [articles, setArticles] = useState(defaultArticles);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      id: Date.now(),
      title: title
    };

    console.log(newArticle);
    console.log(defaultArticles);
    setArticles([...articles, newArticle]);
    
    setTitle('');
  };

  const handleClickDelete = (idToDelete) => {
    const newArticles = articles.filter(article => article.id != idToDelete);
    setArticles(newArticles);
  };


  return (
    <div className="container text-center">
      <h1 className="mb-3 py-2">Lista articoli</h1>      

      <form onSubmit={handleSubmit} className="mb-3">
        <input 
          type="text" 
          value={title}
          onChange={(e) => {setTitle(e.target.value)}} />
        <button className="btn btn-primary ms-2" type="submit">Submit form</button>
      </form>

      <ul className="mx-auto" style={{maxWidth:'200px'}}>
        {articles.map(article => 
          <li className="mb-2 d-flex justify-content-between align-items-center" key={article.id}>{article.title} 
            <button onClick={() => handleClickDelete(article.id)} className="btn btn-primary ms-2">delete</button>
          </li>            
        )}
      </ul>
    </div>
  )
}


