import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropType from 'prop-types'


function FeedbackList( {feedback, deletHandle } ) {
    if(!feedback || feedback.length === 0) return ( <p>No feedbacks yet.</p> );
  return (
    <div className='feedback-list'>{feedback.map((item) =>  (
        <FeedbackItem key={item.id} item={item} handleDelete={deletHandle}/>
    ))}</div>
  )
}

FeedbackList.propTypes = {
  feedback: PropType.arrayOf(
    PropType.shape(
      {
        // id: PropType.number.isRequired,
        rating: PropType.number.isRequired,
        text: PropType.string.isRequired
      }
    )
  )
}

export default FeedbackList;