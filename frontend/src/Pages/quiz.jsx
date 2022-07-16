import React from 'react'
import {Link} from 'react-router-dom'

const Quiz = () => {
  return (
    <div>
      <div className='container p-5'>
        <h2 className='text-center'>Quiz Name</h2>
        <p> Here We will show the description of the quiz</p>
        <h3>Instructions</h3>
        <ul className='p-3'>
          <li>Koii apni maa nhii chudaayega quiz k bich me!</li>
          <li>Koii apni maa nhii chudaayega quiz k bich me!</li>
          <li>Koii apni maa nhii chudaayega quiz k bich me!</li>
          <li>Koii apni maa nhii chudaayega quiz k bich me!</li>
          <li>Koii apni maa nhii chudaayega quiz k bich me!</li>
          <li>Koii apni maa nhii chudaayega quiz k bich me!</li>
          <li>Koii apni maa nhii chudaayega quiz k bich me!</li>
        </ul>
        <Link to="/quizQuestions" className='btn-lg btn-primary float-end mt-3 text-decoration-none'>Start Quiz</Link>
      </div>
    </div>
  )
}

export default Quiz
