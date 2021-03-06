import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  let average = feedback.reduce((acu, curval) => {
    return acu + curval.rating;
  }, 0) / feedback.length;

  // this toFixed(1) makes it only 1 decimal place and then replace .0 with '' (using regex)
  average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews </h4>
      <h4>Average rating : {average} </h4>
    </div>
  )
}

export default FeedbackStats