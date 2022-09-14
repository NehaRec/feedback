import { useState } from 'react'
// import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
// import FeedbackContext from '../context/FeedbackContext'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {

  const [text, setText] = useState('')
  const [rating, setRating] = useState(1)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
   }
  }, [feedbackEdit])

  // const { addFeedback, feedbackEdit, updateFeedback } =
  //   useContext(FeedbackContext)

  // useEffect(() => {
  //   if (feedbackEdit.edit === true) {
  //     setBtnDisabled(false)
  //     setText(feedbackEdit.item.text)
  //     setRating(feedbackEdit.item.rating)
  //   }
  // }, [feedbackEdit])

  // NOTE: This should be checking input value not state as state won't be the updated value until the next render of the component

  //prettier-ignore
  // const handleTextChange = ({ target: { value } }) => { // 👈  get the value
 
  //   if (value === '') {
  //     setBtnDisabled(true)
  //     setMessage(null)
      
  // // prettier-ignore
  //   } else if (value.trim().length < 10) { // 👈 check for less than 10
  //     setMessage('Text must be at least 10 characters')
  //     setBtnDisabled(true)
  //   } else {
  //     setMessage(null)
  //     setBtnDisabled(false)
  //   }
  //   setText(value)
  // }


// e:{
//   tar:{
//     va
//   }
// }
// const {target}=e;
// const {value}=e.target
  // target={
  //   value
  // }

  // const {value}=targettarget={
  //   value
  // }

  // const {value}=target


    const handleTextChange = (e) => {
    if (text=== ''){
      setBtnDisabled(true)
      setMessage(null)}
    else if (text !== '' &&  text.trim().length < 10) { 
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
    }

    // const handleTextChange=(e)=>{
    //   const {value}=e.target
    //   console.log(e)
    //   setText(value)
    //   if(value===''){
    //     alert("empty")
      
    //   }

    // }


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (text.trim().length > 10) {
  //     const newFeedback = {
  //       text,
  //       rating,
  //     }
      
  // const handleTextChange = (e) => {
  //         setText(e.target.value)
  //       // console.log(e.target.value)
  //     }

  //     if (feedbackEdit.edit === true) {
  //       updateFeedback(feedbackEdit.item.id, newFeedback)
  //     } else {
  //       addFeedback(newFeedback)
  //     }

  //     // NOTE: reset to default state after submission
  //     setBtnDisabled(true) // 👈  add this line to reset disabled
  //     setRating(10) //👈 add this line to set rating back to 10
  //     setText('')
  //   }
  // }

  //NOTE: pass selected to RatingSelect so we don't need local duplicate state
//   return (
//     <Card>
//       <form onSubmit={handleSubmit}>
//         <h2>How would you rate your service with us?</h2>
//         <RatingSelect select={setRating} selected={rating} />
//         <div className='input-group'>
//           <input
//             onChange={handleTextChange}
//             type='text'
//             placeholder='Write a review'
//             value={text}
//           />
//           <Button type='submit' isDisabled={btnDisabled}>
//             Send
//           </Button>
//         </div>

//         {message && <div className='message'>{message}</div>}
//       </form>
//     </Card>
//   )
// }

const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
     }

     if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setBtnDisabled(true)
      setRating(1)
      setText('')

    } 
}

return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected = {rating}/>
        <div className='input-group'>
          <input onChange={handleTextChange} type='text' placeholder='Write a review'
            value={text} />
            {/* <Button type='submit'> */}
             <Button  type='submit' isDisabled={btnDisabled}> 
               Send
            </Button>

        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm