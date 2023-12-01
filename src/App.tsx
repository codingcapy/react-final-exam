import { useState } from 'react'
import { foods } from "../data"
import './App.css'

function App() {

  const [content, setContent] = useState("")
  console.log(content)

  return (
    <div id="wrapper">
      <main>
        <h1>React Final Exam</h1>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder='Search foods' id='search-bar' />
        {foods.map((dish) =>
          content !== ""
            ?
            dish.name.toLowerCase().includes(content.toLowerCase())
              ? <div key={dish.id} className='foodArea'>
                <p><strong>{dish.name}</strong></p>
                <p className='description'>{dish.description}</p>
              </div>
              : ""
            : <div key={dish.id} className='foodArea'>
              <p><strong>{dish.name}</strong></p>
              <p className='description'>{dish.description}</p>
            </div>
        )}
      </main>
    </div >
  )
}

export default App