
import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackStats = () => {

const {feedback} = useContext(FeedbackContext)

let average = feedback.reduce((acc,cur)=>{
    return acc + cur.rating
},0) / feedback.length

// let sum=0
//  feedback.map(d=>{
//   sum=sum+d.rating
// })
// sum=sum/feedback.length

average = average.toFixed(1).replace(/[.,]0$/, '') // gives only 1 decimal place with average rating and we are replacing zeros with nothing if it will come.

console.log(average)

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      {/* <h4>Average Rating: {isNaN(sum) ? 0 : sum}</h4> */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  
  )
}


export default FeedbackStats

