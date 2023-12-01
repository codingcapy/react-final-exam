import { ReactEventHandler, useState } from 'react'
import { foods } from "../data"
import './App.css'
import React from "react"

function App() {

  const [content, setContent] = useState("")

  return (
    <div id="wrapper">
      <main>
        <h1>React Final Exam</h1>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder='Search foods' id='search-bar' />
        {foods.map((dish: any) =>
          content !== ""
            ?
            dish.name.toLowerCase().includes(content.toLowerCase())
              ? <div><FoodTitle key={dish.id} value={dish.name} higlight={content} className='foodArea' />
                <FoodDescription key={dish.id + 1} value={dish.description} higlight={content} className='foodArea' /></div>
              : ""
            : <div key={dish.id} className='foodArea'>
              <p><strong>{dish.name}</strong></p>
              <p className='description'>{dish.description}</p>
            </div>
        )
        }
      </main >
    </div >
  )
}

const FoodTitle = (props: any) => {
  return <p>{getHighlightedText(props.value, props.higlight)}</p>;
};

const FoodDescription = (props: any) => {
  return <p>{getHighlightedText(props.value, props.higlight)}</p>;
};

function getHighlightedText(text: any, higlight: any) {
  // Split text on higlight term, include term itself into parts, ignore case
  var parts = text.split(new RegExp(`(${higlight})`, "gi"));
  return parts.map((part: any, index: any) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === higlight.toLowerCase() ? (
        <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

export default App