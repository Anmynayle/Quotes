import React from 'react'

const QuoteBtn = ({ colorsRandom, getRandomAll}) => {

  
const objBgStyle={
    backgroundColor: colorsRandom
 }


  return (
   <div className='btn__container'>
       <button onClick={getRandomAll} className='box__btn' style={objBgStyle}>&#62;</button>
   </div>
  )
}
export default QuoteBtn