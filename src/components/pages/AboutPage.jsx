import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>About the project</h1>
      <p>
        This is a react app to submit feedbacks for any product or service. <br />
        Version 1.0.0  <br />
        Get the code from <a href="https://github.com/Rahul-rkm/feedback_app" target='blank'>Github</a>
        <br />
        <Link to='/'>Go back to home</Link>
      </p>
    </Card>
  )
}

export default AboutPage