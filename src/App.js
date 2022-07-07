import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './components/pages/AboutPage';

function App() {
    // feedback is an array of feedback objects, feedback object represents a feedback


    return (
        <>
            <FeedbackProvider>

                <Router>
                    <Header style={{ border: '5px solid red' }} />
                    <div className="container">
                        <Routes>
                            <Route path='/' element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }>
                            </Route>
                            <Route path='/about' element={<AboutPage />} />
                        </Routes>
                    </div>
                    <AboutIconLink />
                </Router>
            </FeedbackProvider>
        </>
    )

}

export default App;



// const list2 = list1.map((item,i) => `${i+1}. ` + item.body);
// console.log(list2);