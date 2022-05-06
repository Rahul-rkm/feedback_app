import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './components/pages/AboutPage';

function App() {
    // feedback is an array of feedback objects, feedback object represents a feedback
    const [feeddback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure to delete?')) {
            setFeedback(() => feeddback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();

        setFeedback([newFeedback, ...feeddback]);
        console.log(newFeedback);
    }

    return (
        <>
            <Header style={{ border: '5px solid red' }} />
            <div className="container">
                <Router>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feeddback} />
                                <FeedbackList feedback={feeddback} deletHandle={deleteFeedback} />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>

                </Router>
            </div>
        </>
    )

}

export default App;



// const list2 = list1.map((item,i) => `${i+1}. ` + item.body);
// console.log(list2);