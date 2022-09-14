// import { useState } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card';

import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({ item}) {

   const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

   

  // const [reverse,setReverse]=useState(false)

// const [rating, setRating] = useState(7)
// const [text, setText] = useState('This is an example of a feedback item')
// const handleClick = () =>{
//     // setRating(10)
//     setRating((prev) => {
//         return prev + 1
//     })
// }

// const handleClick= (id) => {
//   console.log(id)
// }

  return (
   <>
    {/* <button onClick={()=>setReverse(!reverse)} >Change Theme</button> */}
    <Card>
        <div className="num-display">{item.rating}</div>

        <button onClick={()=>deleteFeedback(item.id)} className="close">
           <FaTimes color='purple'/>
        </button>

        <button onClick={()=>editFeedback(item)} className="edit">
           <FaEdit color='purple'/>
        </button>

        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>click</button> */}

        {/* <button >Hello</button> */}
    </Card>
   </>
  )
}

export default FeedbackItem;