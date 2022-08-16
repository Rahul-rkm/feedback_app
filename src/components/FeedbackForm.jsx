import React, { useContext, useEffect } from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const { addFeedback, feedbackEditItem, updateFeedback } = useContext(FeedbackContext);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [hint, setHint] = useState('');


    useEffect(() => {
        if (feedbackEditItem.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEditItem.item.text);
            setRating(feedbackEditItem.item.rating)
        }
    }, [feedbackEditItem])

    const handleTextChange = (e) => {
        setText(() => e.target.value);
        let lenOfText = e.target.value.trim().length;
        // This set of if else blocks set the message and disabled property of btn
        //
        if (e.target.value.trim() === '') {
            setBtnDisabled(true);
            if (e.target.value.length === 0)
                setHint(null);
            else if (e.target.value.length > 0)
                setHint('Text must have atleast 10 characters');
        }

        else if (lenOfText < 10) {
            setBtnDisabled(true);
            setHint('Text must have atleast 10 characters');
        }
        else if (lenOfText >= 10) {
            setBtnDisabled(false);
            setHint(null);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length >= 10) {
            const newFeedback = {
                rating,
                text
            }

            if (feedbackEditItem.edit === true) {
                updateFeedback(feedbackEditItem.item.id, newFeedback)
            }
            else {
                addFeedback(newFeedback);
            }
            setText('');
            setBtnDisabled(true);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h3>How do you rate our services?</h3>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onInput={handleTextChange} type='text' value={text} placeholder='Write a review'></input>
                    <Button type='submit' isDisabled={btnDisabled} version={'secondary'}>Submit</Button>
                </div>
                {text.trim().length < 10 && <div className='message'>{hint}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm