import { useState } from 'react'
import './App.css'
import quote from './json/quote.json'
import QuoteBox from './component/QuoteBox'
import colors from './utils/colors'


function App() {

 const getRandomElement = arr =>{
  const indexRandom=Math.floor(Math.random()* arr.length)
  return arr[indexRandom]

 }
  

 let quoteRandom = getRandomElement(quote)
 let colorsRandom = getRandomElement(colors)

  
const [randomQuote, setrandomQuote] = useState(quoteRandom)
const [randomColors, setrandomColors] = useState(colorsRandom)

const objStyle={
  backgroundColor: colorsRandom
}

const getRandomAll  = () => {
  quoteRandom =(getRandomElement(quote)) 
  colorsRandom = (getRandomElement(colors))
  setrandomQuote(quoteRandom)
  setrandomColors(colorsRandom)
}

  return (
    <div className="App" style={objStyle}>
  
      <QuoteBox 
      quoteRandom={quoteRandom} 
      colorsRandom={colorsRandom} 
      getRandomAll={getRandomAll}
       />

       
    </div>
  )
}

export default App
