import React from 'react'
import QuoteBtn from './QuoteBtn'

const QuoteBox = ({quoteRandom, colorsRandom,getRandomAll}) => {
   
    
console.log(colorsRandom)


const objStyle={
    color: colorsRandom
 }

 const objBgStyle={
    backgroundColor: colorsRandom
 }

    return (
    <article className='box' style={objStyle}>
      <div className='box__container'>
        <div className='box__title'>
           <i class="fa-solid fa-quote-left"></i>
           <h1 className='box__quate'>{quoteRandom.quote}</h1>
        </div>
      <p className='box__author'>{quoteRandom.author}</p>
      <QuoteBtn getRandomAll={getRandomAll} colorsRandom={colorsRandom} />
      </div>
    </article>
  )
}

export default QuoteBox