import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [hint, setHint] = useState('');
    const handleTextChange = (e) => {
        // This set of if else blocks set the message and disabled property of btn
        if (text === '') {
            setBtnDisabled(true);
            setHint(null);
        }
        else if (text.trim().length < 10) {
            setBtnDisabled(true);
            setHint('Text must have atleast 10 characters');
        }
        else {
            setBtnDisabled(false);
            setHint(null);
        }
        setText(() => e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length >= 10) {
            const newFeedback = {
                rating,
                text
            }
            
            handleAdd(newFeedback);
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
                {hint && <div className='message'>{hint}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm