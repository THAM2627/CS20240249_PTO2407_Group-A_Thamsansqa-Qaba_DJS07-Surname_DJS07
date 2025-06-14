import React, {useState,useEffect} from 'react'

function App() {

  const [meme, setMeme]  = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemes, setAllMemes] = React.useState([])

React.useEffect(()=> {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();setAllMemes(data.data.memes);
    }
    getMeme()
  })

function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;(prevMeme=>({
        ...prevMeme,
        randomImage: url
    }))
}

function handleChange(event) {
  const {name, value} = event.target;
  setMeme(prevMeme=>({
      ...prevMeme,
      [name]: value
  }))
}


  return (
    <main>
    <div className="form">

  <input type = "text"  
  placeholder = "Top text" className = "form--input" name="topText" 
  value = {meme.topText} 
  onChange = {handleChange}/>

  <input type = "text"
  placeholder = "Bottom text"
  className = "form--input"
  name = "bottomText"
  value = {meme.bottomText}
  onChange = {handleChange}/>

  <button className = "form--button" onClick = {getMemeImage}>

  Get a new meme image

  </button>

  </div> 
    </main>
  )
}

export default App;
