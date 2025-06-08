function App() {

  const [meme, setMeme]  = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemes, setAllMemes] = useState([])

useEffect(()=> {
  async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();setAllMemes(data.data.memes);
  }
  getMeme()


function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * allMemes.length);
  const url = allMemes[randomNumber].url;(prevMeme=>({
      ...prevMeme,
      randomImage: url
  }))
}

  return (
    <div>
      
    </div>
  )
}

export default App
