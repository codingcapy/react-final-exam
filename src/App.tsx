import { useState } from 'react'
import data from "../data"
import './App.css'

function App() {

  const [content, setContent] = useState("")
  console.log(content)

  return (
    <>
      <h1>Home</h1>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      {data.map((dish) =>
        content !== ""
          ?
          dish.name.toLowerCase().includes(content.toLowerCase()) || dish.description.toLowerCase().includes(content.toLowerCase())
            ? <div key={dish.id}>
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
            </div>
            : ""
          : <div key={dish.id}>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
          </div>
      )}
    </>
  )
}

export default App