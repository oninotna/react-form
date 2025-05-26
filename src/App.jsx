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
    }

console.log(newArticle);
    setArticles([...articles, newArticle]);
    setTitle('');
  }


  return (
    <div className="container text-center">
      <h1 className="mb-3 py-2">Lista articoli</h1>      

      <form onSubmit={handleSubmit} className="mb-3">
        <input 
          type="text" 
          value={title}
          onChange={ (e) => {setTitle(e.target.value)}} />
        <button className="btn btn-primary ms-2" type="submit">Submit form</button>
      </form>

      <ul className="mx-auto" style={{maxWidth:'120px'}}>
        {articles.map(article => 
          <li key={article.id}>{article.title}</li>
        )}
      </ul>
    </div>
  )
}


