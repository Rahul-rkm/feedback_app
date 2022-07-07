import { useState, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 8,
            text: 'This is feedback 1'
        },
        {
            id: 2,
            rating: 5,
            text: 'This is feedback 2'
        },
        {
            id: 3,
            rating: 7,
            text: 'This is feedback 3'
        },
        {
            id: 4,
            rating: 9,
            text: 'This is feedback 4'
        }
    ])

    const [feedbackEditItem, setFeedbackEditItem] = useState({
        item: {},
        edit: false
    })


    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure to delete?')) {
            setFeedback(() => feedback.filter((item) => item.id !== id))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEditItem({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => {
            if (item.id === id) {
                return updItem
            }
            else {
                return item
            }
        }))
    }

    return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEditItem, updateFeedback }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;